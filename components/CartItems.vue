<template>
  <div>
    <EmptyCart v-if="!cartItems.length" />
    <main v-else class="container cart-table">
      <div class="row table-headers">
        <div class="col-xl-2 col-sm-3 products-header">produtos</div>
        <div class="col-xl-2 offset-xl-1 col-sm-3">quantidade</div>
        <div class="col-xl-2 offset-xl-1 col-sm-3">valor unitário</div>
        <div class="col-xl-2 offset-xl-2 col-sm-3">total</div>
      </div>
      <ul>
        <li v-for="item in cartItems" :key="item.id" class="row cart-item">
          <div class="col-xl-2 col-lg-3 col-md-3 products-col">
            <button
              class="remove-button"
              type="button"
              @click="removeItem(item)"
            >
              <img src="/trash-icon.svg" alt="Ícone de lixeira" />
            </button>
            <div class="products-label">
              <span class="category">{{ item.category }}</span>
              <span>{{ item.name }}</span>
            </div>
          </div>
          <div class="col-xl-2 offset-xl-1 col-lg-3 col-md-3">
            <div class="quantity-controller">
              <button class="minus" type="button" @click="subtractItem(item)">
                -</button
              ><span>{{
                item.quantity >= 10 ? item.quantity : `0${item.quantity}`
              }}</span
              ><button class="plus" type="button" @click="addItem(item)">
                +
              </button>
            </div>
          </div>
          <div class="col-xl-2 offset-xl-1 col-lg-3 col-md-3">
            <span>
              {{
                item.price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }}
            </span>
            <span class="installments-advise">
              à vista ou 10x R{{
                (item.price / 10)
                  .toString()
                  .match(/^-?\d+(?:\.\d{0,2})?/)[0]
                  .replace('.', ',')
              }}</span
            >
          </div>
          <div class="col-xl-2 offset-xl-2 col-lg-3 col-md-3">
            <span>
              {{
                (item.price * item.quantity).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }}</span
            >
            <span class="installments-advise">
              à vista ou 10x R{{
                ((item.price * item.quantity) / 10)
                  .toString()
                  .match(/^-?\d+(?:\.\d{0,2})?/)[0]
                  .replace('.', ',')
              }}</span
            >
          </div>
        </li>
      </ul>
      <div class="row total">
        <span
          id="total-label"
          class="col-xl-2 offset-xl-8 col-lg-4 offset-lg-5 col-md-5 offset-md-3 col-6"
          >total à vista</span
        ><span class="col-xl-2 col-lg-3 col-md-4 col-6 total-value">{{
          totalPrice.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })
        }}</span>
      </div>
      <div class="row total total-installments">
        <span
          id="installments-label"
          class="col-xl-2 offset-xl-8 col-lg-4 offset-lg-5 col-md-5 offset-md-3 col-6"
          >total parcelado</span
        ><span class="col-xl-2 col-lg-3 col-md-4 col-6"
          ><p>
            <span class="installments-advise">em até </span>10x R{{
              (financedTotalPrice / 10)
                .toString()
                .match(/^-?\d+(?:\.\d{0,2})?/)[0]
                .replace('.', ',')
            }}
          </p>
          <p class="installments-advise">
            &#40;Total
            {{
              financedTotalPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })
            }}
            &#41;
          </p></span
        >
      </div>
      <div class="buttons-container row">
        <div class="col-xl-2 col-lg-3">
          <button class="clean" type="button" @click="removeAll()">
            <img src="/trash-icon.svg" alt="Ícone de lixeira" />Limpar carrinho
          </button>
        </div>
        <NuxtLink to="/" class="col-xl-3 offset-xl-4 col-lg-3 offset-lg-3">
          <button class="back" type="button">Continuar comprando</button>
        </NuxtLink>
        <NuxtLink to="/checkoutPage" class="col-xl-3 col-lg-3">
          <button class="checkout" type="button">Concluir compra</button>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
export default Vue.extend({
  computed: {
    cartItems() {
      return this.$store.state.shop.cart.cartItems
    },
    ...mapGetters({
      totalPrice: 'shop/cart/totalPrice',
      financedTotalPrice: 'shop/cart/financedTotalPrice',
    }),
  },
  methods: {
    ...mapMutations({
      removeItem: 'shop/cart/removeItem',
      addItem: 'shop/cart/addItem',
      subtractItem: 'shop/cart/subtractItem',
      removeAll: 'shop/cart/removeAll',
    }),
  },
})
</script>

<style lang="scss" scoped>
.cart-table {
  padding: 9rem 0 10rem 0;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.5rem;
  .cart-item {
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 2.3rem 0;
    border-bottom: 1px solid var(--line-color);
  }
}
.table-headers {
  text-transform: uppercase;
  color: var(--title-color);
  padding-bottom: 2.4rem;
  border-bottom: 1px solid var(--line-color);
  .products-header {
    text-align: center;
  }
}
.remove-button {
  background: none;
  border: none;
}
.category {
  color: var(--contrast-color);
  font-size: 1.4rem;
}
.products-col {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
}
.products-label {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.quantity-controller {
  width: 9.7rem;
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--pattern-color);
  button {
    color: var(--pattern-color);
    font-weight: 700;
    height: 100%;
    width: 2.4rem;
    background: none;
    border: none;
    &.minus {
      border-right: 1px solid var(--pattern-color);
    }
    &.plus {
      border-left: 1px solid var(--pattern-color);
    }
  }
}
button {
  &:hover {
    opacity: 0.8;
  }
}
.total {
  text-transform: uppercase;
  padding-top: 4.5rem;
  &.total-installments {
    border-bottom: 1px solid var(--pattern-color);
    padding-bottom: 4rem;
    p {
      margin: 0;
    }
  }
  .total-value {
    color: var(--contrast-color);
    font-size: 2.6rem;
  }
}
#total-label,
#installments-label {
  text-align: right;
}
.installments-advise {
  font-weight: 400;
  text-transform: none;
}
.buttons-container {
  padding-top: 5rem;
  button {
    height: 5.2rem;
    width: 100%;
    border: none;
    color: var(--title-color);
    &.clean {
      background: none;
      img {
        padding-right: 1rem;
      }
    }
    &.back {
      background: var(--button-color);
    }
    &.checkout {
      background: var(--contrast-color);
      color: var(--back-color);
    }
  }
}
@media only screen and (max-width: 770px) {
  .table-headers {
    .offset-xl-1,
    .offset-xl-2 {
      display: none;
    }
  }
  .products-col {
    justify-content: start;
    gap: 3rem;
  }
  .products-label {
    gap: 0;
  }
  .quantity-controller {
    margin-left: 4.5rem;
  }
}
</style>
