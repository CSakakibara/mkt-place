<template>
  <div>
    <HeaderComponent />
    <CheckoutForm />
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
  },
  created() {
    if (!this.cartItems.length) this.$router.push({ path: '/' })
  },
})
</script>

this.$router.push({path: "panel"})
