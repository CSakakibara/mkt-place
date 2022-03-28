<template>
  <div class="home-page">
    <HeaderComponent />
    <main>
      <BannerComponent />
      <SearchBar />
      <ProductsGrid :products="products" />
    </main>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '@/models'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const products = await $axios.$get('/produtos.json')
    return { products }
  },
  data() {
    return {
      products: [] as Product[],
    }
  },
  head() {
    return {
      title: 'Mkt Place',
      meta: [
        {
          hid: 'hid',
          name: 'nome',
          content: 'mkt place description',
        },
      ],
    }
  },
})
</script>
