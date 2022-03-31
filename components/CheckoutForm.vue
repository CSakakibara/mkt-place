<template>
  <div class="container">
    <form class="row" novalidate="true" @submit="checkForm">
      <div class="field col-xl-6 col-lg-6 col-md-12">
        <label class="label" for="name">Nome*</label>
        <input id="name" v-model="name" class="input" type="text" name="name" />
      </div>
      <div class="field col-xl-6 col-lg-6 col-md-12">
        <label class="label" for="postal">CEP*</label>
        <input
          id="postal"
          v-model="postal"
          class="input"
          type="text"
          name="postal"
          maxlength="9"
        />
      </div>
      <div class="field col-xl-6 col-lg-6 col-md-12">
        <label class="label" for="email">E-mail*</label>
        <input
          id="email"
          v-model="email"
          class="input"
          type="email"
          name="email"
        />
      </div>
      <div class="field col-xl-4 col-lg-6 col-md-12">
        <label class="label" for="address">Endereço*</label>
        <input
          id="address"
          v-model="address"
          class="input"
          type="text"
          name="address"
        />
      </div>
      <div class="field col-xl-2 col-lg-6 col-md-12">
        <label class="label" for="number">Número*</label>
        <input
          id="number"
          v-model="number"
          class="input"
          type="text"
          name="number"
        />
      </div>
      <div class="field col-xl-6 col-lg-6 col-md-12">
        <label class="label" for="cpf">CPF*</label>
        <input
          id="cpf"
          v-model="cpf"
          class="input"
          type="text"
          name="cpf"
        />
      </div>
      <div class="field col-xl-3 col-lg-6 col-md-12">
        <label class="label" for="complement">Complemento</label>
        <input
          id="complement"
          v-model="complement"
          class="input"
          type="text"
          name="complement"
        />
      </div>
      <div class="field col-xl-3 col-lg-6 col-md-12">
        <label class="label" for="district">Bairro*</label>
        <input
          id="district"
          v-model="district"
          class="input"
          type="text"
          name="district"
        />
      </div>
      <div class="field col-xl-3 col-lg-6 col-md-12">
        <label class="label" for="birthday">Data de Nascimento*</label>
        <input
          id="birthday"
          v-model="birthday"
          class="input"
          type="text"
          name="birthday"
          placeholder="dd/mm/yyyy"
        />
      </div>
      <div class="field col-xl-3 col-lg-6 col-md-12">
        <label class="label" for="phone">Telefone*</label>
        <input
          id="phone"
          v-model="phone"
          class="input"
          type="tel"
          name="phone"
        />
      </div>
      <div class="field col-xl-4 col-lg-6 col-md-12">
        <label class="label" for="city">Cidade*</label>
        <input id="city" v-model="city" class="input" type="text" name="city" />
      </div>
      <div class="field col-xl-2 col-lg-6 col-md-12">
        <label class="label" for="state">Estado*</label>
        <input
          id="state"
          v-model="state"
          class="input"
          type="text"
          name="state"
          maxlength="2"
        />
      </div>
      <div class="col-xl-4 offset-xl-8 col-lg-6 offset-lg-6  button-container">
        <button type="submit">Concluir Compra</button>
      </div>
    </form>
    <p v-if="errors.length" class="errors">
      <b>Por favor corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapMutations} from 'vuex'
const baseUrl= 'https://viacep.com.br/ws/'
export default Vue.extend({
  data() {
    return {
      errors: [] as string[],
      name: '',
      postal: '',
      email: '',
      address: '',
      number: '',
      cpf: '',
      complement: '',
      district: '',
      birthday: '',
      phone: '',
      city: '',
      state: '',
      response:null,
    }
  },
  watch:{
    postal(newPostal){
      this.postal = newPostal
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
      if(newPostal.length ===9){
        this.getFromCep()
        return
      }
      this.response = null
    },
    response(newResponse, oldResponse){
      if(!newResponse) return
      if(newResponse === oldResponse) return
      this.address = newResponse.logradouro
      this.complement = newResponse.complemento
      this.district = newResponse.bairro
      this.city = newResponse.localidade
      this.state = newResponse.uf
    },
    cpf (newCpf) {
      this.cpf = newCpf.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },
    birthday(newBirthday){
      this.birthday = newBirthday.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})\d+?$/, '$1')
    },
    phone(newPhone){
      this.phone = newPhone.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1)$2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    },
    state(newState){
      this.state = newState.toUpperCase()
    }
  },
  methods: {
    ...mapMutations({
      openSuccess: 'shop/checkout/openSuccess'
    }),
    checkForm(event: Event) {
      event.preventDefault()
      this.errors = []
      if (!this.name) {
        this.errors.push('Nome é obrigatório.')
      }
      if (!this.postal) {
        this.errors.push('CEP é obrigatório.')
      }
      if (!this.email) {
        this.errors.push('E-mail é obrigatório.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('E-mail inválido.')
      }
      if (!this.address) {
        this.errors.push('Endereço é obrigatório.')
      }
      if (!this.number) {
        this.errors.push('Número é obrigatório.')
      }
      if (!this.cpf) {
        this.errors.push('CPF é obrigatório.')
      }
      if (!this.district) {
        this.errors.push('Bairro é obrigatório.')
      }
      if (!this.birthday) {
        this.errors.push('Data de Nascimento é obrigatório.')
      }
      if (!this.phone) {
        this.errors.push('Telefone é obrigatório.')
      }
      if (!this.city) {
        this.errors.push('Cidade é obrigatório.')
      }
      if (!this.state) {
        this.errors.push('Estado é obrigatório.')
      }

      if (!this.errors.length) {
        this.openSuccess()
      }
    },
    validEmail(email: string) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    getFromCep(){
      const uri = `${baseUrl}${this.postal}/json/`
      this.$axios.$get(uri).then( axiosResponse =>{
        if(!axiosResponse.erro){
          this.response = axiosResponse
          return
        }
        alert("Cep inválido")
      }).catch(error => {
        alert(error)
      })
    }
  },

})
</script>

<style lang="scss" scoped>
.container {
  padding: 12rem 0;
}
form {
  font-size: 1.8rem;
  .field {
    display: flex;
    flex-direction: column;
    padding-bottom: 3.8rem;
    .label {
      margin-bottom: 0.9rem;
      color: var(--title-color);
    }
    .input {
      height: 4.5rem;
      text-indent: 1.5rem;
      border-radius: 0.3rem;
      border: 1px solid var(--pattern-color);
    }
  }
  .button-container {
    padding-top: 0.2rem;
    button {
      height: 5.2rem;
      width: 100%;
      border: none;
      color: var(--title-color);
      background: var(--contrast-color);
      color: var(--back-color);
    }
  }
}
.errors{
  color:red;
  font-size: 1.6rem;
}
</style>
