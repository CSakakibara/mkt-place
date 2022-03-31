<template>
  <div>
    <HeaderComponent />
    <CheckoutForm />
    <SuccessModal
      v-if="success"
      :message="`Seu cadastro foi solicitado com sucesso!`"
    />
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    cartItems() {
      return this.$store.state.shop.cart.cartItems
    },
    success() {
      return this.$store.state.shop.checkout.success
    },
  },
  created() {
    if (!this.cartItems.length) this.$router.push({ path: '/' })
  },
})
</script>
