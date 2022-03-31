<template>
  <div class="container empty">
    <main>
      <h2 class="">Seu carrinho de compras da Mkt Place está vazio.</h2>
      <p>
        Seu carrinho de compras está aqui para servir a você. Dê um propósito a
        ele — preencha-o com comida, roupas, produtos domésticos, eletrônicos e
        muito mais.
      </p>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.empty {
  min-height: 77vh;
  display: flex;
  align-items: center;
  h2 {
    font-size: 7.2rem;
  }
  p {
    font-size: 3.6rem;
  }
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 4.2rem;
    }
    p {
      font-size: 2rem;
    }
  }
}
</style>
