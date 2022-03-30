<template>
  <aside>
    <nav class="container">
      <ul class="row align-items-center">
        <li class="col-2">
          <h1>
            <img
              alt="logomarca Mkt Place com cores roxo e cinza"
              src="/logo.svg"
            />
          </h1>
        </li>
        <li class="col offset-8">
          <NuxtLink to="/"> Produtos </NuxtLink>
        </li>
        <li class="col">
          <NuxtLink to="/shoppingCart" class="relative"
            ><img
              alt="Ícone de carrinho de compras"
              class="col shopping-cart"
              src="/shopping-cart.svg"
            />
            <div v-if="totalQuantity" class="counter">
              <span>{{ totalQuantity }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters({ totalQuantity: 'shop/cart/totalQuantity' }),
  },
})
</script>

<style lang="scss" scoped>
aside {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: var(--back-color);
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));

  .container {
    height: 12.8rem;
    margin: 0 auto;

    ul {
      list-style: none;
      height: 100%;
      li {
        padding: 0 1rem 0 1rem;

        .shopping-cart {
          max-height: 4.5rem;
          max-width: 7.5rem;
        }

        &:hover {
          opacity: 0.8;
        }
      }

      a {
        font-size: 1.6rem;
        font-weight: 700;
        text-decoration: none;
        color: var(--pattern-color);

        &:hover {
          color: var(--contrast-color);
        }
      }
    }

    .relative {
      position: relative;
      .counter {
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 7px;
        background-color: #ed1c24;
        top: 1.5rem;
        right: 0;
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--back-color);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
