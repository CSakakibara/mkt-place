<template>
  <section>
    <div class="container rotative-banner">
      <div class="banner-content">
        <h2>Notebooks</h2>
        <h3>As melhores ofertas</h3>
      </div>
    </div>
    <div class="indicator-dots">
      <div class="container">
        <div class="dots-group">
          <label class="indicator">
            <img
              alt="Ponto que representa qual o banner que está sendo exibido"
              src="/active-indicator.svg"
            />
          </label>
          <label class="indicator">
            <img
              alt="Ponto que representa banner que não está sendo exibido"
              src="/inactive-indicator.svg"
            />
          </label>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  background-image: linear-gradient(62deg, #8d35b7 0%, #d693f6 100%);
  .rotative-banner {
    height: 44.4rem;
    color: var(--back-color);
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: end;
    h2 {
      font-weight: 900;
      font-size: 7.2rem;
    }
    h3 {
      font-weight: 900;
      font-size: 3.6rem;
    }
  }
  .dots-group {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;
    .indicator {
      padding-left: 1.1rem;
      padding-right: 1.1rem;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }
  .indicator-dots {
    margin-bottom: 3.6rem;
    background: var(--back-color);
  }
}
</style>
