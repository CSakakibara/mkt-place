<template>
  <section>
    <div class="container">
      <div class="products">
        <ul class="row">
          <li v-for="product in products" :key="product.id" class="col-4">
            <ProductPreview :product="product" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    products: { type: Array, required: true },
  },
})
</script>

<style lang="scss" scoped>
section {
  padding: 4.4rem 0 4.4rem 0;
  .container {
    padding: 0 0.8rem;
  }
}
ul {
  list-style: none;
  li {
    padding: 3.1rem 1rem 3.1rem 1rem;
  }
}
</style>
