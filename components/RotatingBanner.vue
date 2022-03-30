<template>
  <section>
    <BannerPreview :banner="rotatingBanner[bannersIndex]" />
    <div class="indicator-dots">
      <div class="container">
        <ul class="dots-group">
          <li v-for="counter in rotatingBanner.length" :key="counter">
            <button
              v-if="bannersIndex === counter - 1"
              class="indicator active"
            >
              <img
                alt="Ponto que representa qual o banner que está sendo exibido"
                src="/active-indicator.svg"
              />
            </button>
            <button v-else class="indicator" @click="changeBanner(counter - 1)">
              <img
                alt="Ponto que representa banner que não está sendo exibido"
                src="/inactive-indicator.svg"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  data() {
    return {
      rotatingBanner: [
        {
          title: 'Notebooks',
          subtitle: 'As melhores ofertas',
          startColor: 'var(--contrast-color)',
          endColor: 'var(--gradient-purple)',
          position: 'right',
          fontWeight: '900',
        },
        {
          title: 'Smartphone',
          subtitle: 'Confira as últimas novidades',
          startColor: 'var(--alternative-color)',
          endColor: 'var(--gradient-blue)',
          position: 'left',
          fontWeight: '700',
        },
      ],
      intervalId: 0,
    }
  },
  computed: {
    bannersIndex() {
      return this.$store.state.shop.inputs.bannersIndex
    },
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    window.clearInterval(this.intervalId)
  },
  methods: {
    ...mapMutations({
      changeToNextBanner: 'shop/inputs/changeToNextBanner',
      changeBanner: 'shop/inputs/changeBanner',
    }),
    init() {
      const updateBanner = this.changeToNextBanner
      const length = this.rotatingBanner.length
      this.intervalId = window.setInterval(function () {
        updateBanner(length)
      }, 4000)
    },
  },
})
</script>
<style lang="scss" scoped>
section {
  .dots-group {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;
    list-style: none;
    gap: 2.2rem;
    .indicator {
      background: none;
      border: none;
      &.active {
        cursor: default;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .indicator-dots {
    margin-bottom: 3.6rem;
  }
}
</style>
