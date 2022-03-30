<template>
  <div class="container">
    <form class="row" action="">
      <div class="field col-6">
        <label class="label" for="name">Nome*</label>
        <input id="name" v-model="name" class="input" type="text" name="name" />
      </div>
      <div class="field col-6">
        <label class="label" for="postal">CEP*</label>
        <input
          id="postal"
          v-model="postal"
          class="input"
          type="text"
          name="postal"
        />
      </div>
      <div class="field col-6">
        <label class="label" for="email">E-mail*</label>
        <input
          id="email"
          v-model="email"
          class="input"
          type="email"
          name="email"
        />
      </div>
      <div class="field col-4">
        <label class="label" for="address">Endereço*</label>
        <input
          id="address"
          v-model="address"
          class="input"
          type="text"
          name="address"
        />
      </div>
      <div class="field col-2">
        <label class="label" for="number">Número*</label>
        <input
          id="number"
          v-model="number"
          class="input"
          type="number"
          name="number"
        />
      </div>
      <div class="field col-6">
        <label class="label" for="cpf">CPF*</label>
        <input id="cpf" v-model="cpf" class="input" type="text" name="cpf" />
      </div>
      <div class="field col-3">
        <label class="label" for="cpf">Complemento</label>
        <input
          id="complement"
          v-model="complement"
          class="input"
          type="text"
          name="complement"
        />
      </div>
      <div class="field col-3">
        <label class="label" for="district">Bairro*</label>
        <input
          id="district"
          v-model="district"
          class="input"
          type="text"
          name="district"
        />
      </div>
      <div class="field col-3">
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
      <div class="field col-3">
        <label class="label" for="district">Telefone*</label>
        <input
          id="phone"
          v-model="phone"
          class="input"
          type="tel"
          name="phone"
        />
      </div>
      <div class="field col-4">
        <label class="label" for="district">Cidade*</label>
        <input id="city" v-model="city" class="input" type="text" name="city" />
      </div>
      <div class="field col-2">
        <label class="label" for="district">Estado*</label>
        <input
          id="state"
          v-model="state"
          class="input"
          type="text"
          name="state"
        />
      </div>
      <div class="col-4 offset-8 button-container">
        <button class="" type="button">Concluir Compra</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      postal: null,
    }
  },
  methods: {
    checkForm() {
      this.errors = []
    },
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
</style>
