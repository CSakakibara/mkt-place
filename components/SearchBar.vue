<template>
  <div class="container">
    <div class="search-container row">
      <label for="search-input" class="col-md-auto">Encontre seu produto</label>
      <div class="search col">
        <input
          class="search-input"
          type="search"
          name="search-input"
          placeholder="Pesquisar..."
          @keyup.enter="setSearch"
        />
        <button class="search-button" @click="setSearch">
          <img width="24" height="24" src="/search-icon.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapMutations({
      setSearchTerm: 'shop/inputs/setSearchTerm',
    }),
    setSearch() {
      const inputElement = document.querySelector(
        '.search-input'
      ) as HTMLInputElement

      if (inputElement) this.setSearchTerm(inputElement.value)
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  height: 9.5rem;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
  background-color: #ffffff;
  padding: 0 4.5rem;
}
.search-container {
  width: 100%;
  height: 100%;
  align-items: center;
  column-gap: 5rem;
}
label {
  font-weight: 700;
  font-size: 2rem;
  color: var(--pattern-color);
}
.search {
  position: relative;
  &:hover {
    opacity: 0.8;
  }
}
.search-input {
  height: 4.6rem;
  width: 100%;
  border-radius: 3px;
  border: 1px solid var(--pattern-color);
  font-size: 1.6rem;
  text-indent: 1.2rem;
}
.search-button {
  position: absolute;
  padding: 0.9rem 1.4rem 0.9rem 1.4rem;
  background: var(--contrast-color);
  right: 0;
  border-radius: 3px;
}
</style>
