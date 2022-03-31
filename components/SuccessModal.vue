<template>
  <div class="modal-shadow">
    <div class="modal-body">
      <div class="close-container">
        <button @click="closeSuccess">X</button>
      </div>
      <div class="content-container">
        <img
          src="/success-icon.svg"
          alt="Ícone de sucesso, um círculo com um verificado"
          width="100"
          height="100"
        />
        <p>{{ message }}</p>
        <NuxtLink to="/" class="back-to-home"
          ><img
            src="/left-arrow.svg"
            alt="Ícone de uma seta para a esquerda"
            width="20"
            height="12"
          /><span>voltar para home</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  props: {
    message: { type: String, required: true },
  },
  beforeDestroy() {
    this.closeSuccess()
  },
  methods: {
    ...mapMutations({
      closeSuccess: 'shop/checkout/closeSuccess',
    }),
  },
})
</script>

<style lang="scss" scoped>
.modal-shadow {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  top: 0rem;
  z-index: 1;
  .modal-body {
    background: var(--back-color);
    box-shadow: 0rem 0rem 1.6rem 0.8rem rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 55rem;
    padding: 1.5rem;
    p {
      font-size: 2rem;
      margin: 0;
    }
    a {
      text-decoration: none;
      display: flex;
      justify-items: center;
      align-items: center;
    }
    span {
      padding-left: 0.5rem;
      font-size: 1.6rem;
      text-transform: uppercase;
      color: var(--contrast-color);
    }
    .close-container {
      align-self: end;
      button {
        background: none;
        border: none;
        font-size: 1.8rem;
      }
    }
    .content-container {
      padding-top: 4.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding-bottom: 4rem;
    }
  }
}
</style>
