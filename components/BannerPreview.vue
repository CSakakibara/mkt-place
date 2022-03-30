<template>
  <div
    class="banner"
    :style="{
      background: `linear-gradient(62deg, ${banner.startColor} 0%, ${banner.endColor} 100%)`,
      textAlign: banner.position,
    }"
  >
    <div class="container">
      <div class="banner-content">
        <h2
          :style="{
            fontWeight: banner.fontWeight,
          }"
        >
          {{ banner.title }}
        </h2>
        <h3>{{ banner.subtitle }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    banner: { type: Object, required: true },
  },
})
</script>

<style lang="scss" scoped>
.banner {
  height: 44.4rem;
  color: var(--back-color);
  display: flex;
  align-items: center;
  h2 {
    font-weight: 900;
    font-size: 7.2rem;
  }
  h3 {
    font-weight: 900;
    font-size: 3.6rem;
  }
}
</style>
