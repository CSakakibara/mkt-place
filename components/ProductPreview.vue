<template>
  <article>
    <figure
      :style="{
        backgroundImage: `url(${product.imageUrl})`,
      }"
    ></figure>
    <div class="content">
      <div class="category">{{ product.category }}</div>
      <div class="name">
        <h4>{{ product.name }}</h4>
      </div>
      <div class="description">{{ product.description }}</div>
      <div class="price">
        {{
          product.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })
        }}
      </div>
    </div>
    <div class="button-container">
      <button @click="addItem(product)">adicionar ao carrinho</button>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    ...mapMutations({ addItem: 'shop/cart/addItem' }),
  },
})
</script>

<style lang="scss" scoped>
article {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  figure {
    height: 25rem;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0;
  }
  .content {
    padding: 3rem;
    h4 {
      white-space: nowrap;
      max-height: 2.16rem;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1.8rem;
      color: var(--title-color);
    }

    .category {
      color: var(--contrast-color);
      font-size: 14px;
      font-weight: 700;
      padding-bottom: 0.6rem;
    }

    .name {
      padding: 1.2rem 0;
    }

    .description {
      font-size: 1.6rem;
      line-height: 1.7rem;
      max-height: 5.5rem;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 0.2rem;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 1rem;
      }

      &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 1rem;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }

    .price {
      padding-top: 1.2rem;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--title-color);
    }
  }
  .button-container {
    button {
      border: none;
      border-top: 1px solid var(--line-color);
      width: 100%;
      height: 5.7rem;
      background: var(--back-color);
      color: var(--contrast-color);
      font-size: 1.8rem;
      font-weight: 700;
      text-transform: uppercase;
      &:hover {
        background: var(--contrast-color);
        color: var(--back-color);
        border: none;
      }
    }
  }
  figure {
    transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  &:hover {
    figure {
      transform: scale(1.1);
    }
    .content {
      opacity: 0.9;
    }
  }
}
</style>
