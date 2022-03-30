<template>
  <div class="home-page">
    <HeaderComponent />
    <main>
      <RotatingBanner />
      <SearchBar />
      <ProductsGrid :products="search(products, searchTerm, 'name')" />
    </main>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const products = await $axios.$get('/produtos.json')
    return { products }
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
  computed: {
    searchTerm() {
      return this.$store.state.shop.inputs.searchTerm
    },
  },
  methods: {
    search(list: Array<any>, input: string, key: string) {
      if (input === '') return list
      return list.filter((item) => {
        return item[key].toLowerCase().includes(input.toLowerCase())
      })
    },
  },
})
</script>
