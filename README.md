# MktPlace

# Project Structure

## Componentes

main.css
```
Importação das fontes, criação das variáveis, declaração de estilos globais.
```
HeaderComponent.vue
```
CSF de cabeçalho, contendo a logo e a navegação para as páginas de Produtos e do Carrinho utilizando NuxtLink. 
Em conjunto ao ícone do carrinho possui um elemento com renderização condicional com label dinâmica que se 
baseiam em um getter que é computado calculando a quantidade de items que há no estado de items do carrinho.

Neste arquivo também é declarado um observador com a flag deep para salvar alterações do carrinho no local 
storage mesmo quando apenas uma propriedade da lista é alterada(nesse caso a quantidade). Quando o componente 
é montado caso o estado de items do carrinho esteja vazio, é restaurado do local storage.

A logo e o link do carrinho possuem efeito de hover diminuindo a opacidade, o link da página de produtos 
altera sua cor.

O tamanho relativo das colunas são alterados de acordo com o tamanho do viewport para adequar uma melhor 
visualização.
```
FooterComponent.vue
```
CSF de rodapé, contendo a logo monocromática cinza.
```
BannerPreview.vue
```
CSF de visualização de um banner, recebe um objeto com dados do texto a ser exibido, do alinhamento do text, 
das cores do gradiente do background e o peso da fonte do texto.
```
RotatingBanner.vue
```
CSF de banner rotativo, que instância o BannerPreview enviando as propriedades que o banner a ser exibido deve 
conter, renderiza uma lista de pontos para alterar o banner a ser exibido de acordo com o número de banners 
disponíveis com a condição de não estar ativo, o banner ativo tem o respetivo ponto indicado pela cor não 
realizando nenhuma ação ao ser selecionado.

Os dados dos banners disponíveis estão atualmente declarados neste componente, podendo ser alterado para 
consumir alguma api que busque tais dados.

Na montagem deste componente é iniciado uma função temporizadora que troca o banner a ser exibido a cada 
4000 milisegundos, o identificador da função temporizadora é guardado para posteriormente ser realizado a 
limpeza, antes de ser destruido o componente usa o identificador para parar a função temporizadora.

Os indicadores possuem hover de opacidade.

Obs: O banner rotativo poderia mas não foi implementado usando os recursos do bootstrap.
```
SearchBar.vue
```
CSF de uma barra de pesquisa, pode ser utilizado após digitar um termo/texto com o evento de click no botão 
com o ícone de lupa ou pressionando enter com foco no input de texto. Ao usar atualiza o estado de termo de 
pesquisa que é usado posteriormente para filtrar.
```
ProductPreview.vue
```
CSF de um produto a ser visualizado, recebe um objeto com os dados do produto: uri da imagem, nome do produto, 
categoria, descrição e preço (que é convertido para o formato localizado do brasil). Exibe uma caixa com os 
dados do produto com um botão que adiciona o produto ao carrinho.

A caixa possui hover que expande o conteúdo da imagem com efeito de zoom de progressão lenta.
```

ProductGrid.vue
```
CSF que recebe uma lista de produtos e instância ProducPreview para cada item da lista. O tamanho relativo das 
colunas são alterados dependendo do tamanho do viewport
```
Index.vue
```
CSF de página da página inicial(de produtos) que instância os componentes: Header, RotatingBanner, SearchBar, 
ProductGrid e Footer. Faz requisição para a api que fornece a lista de produtos, e é computado o estado do 
termo de pesquisa que é usado para filtrar quais produtos devem ser enviados para o grid de produtos (ignorando 
case-sensitive).
```
EmptyCart
```
CSF de um preenchimento da página do carrinho amigável ao usuário que é exibido quando não há items adicionados.
```
CartItems.vue
```
CSF da lista de items adicionados ao carrinho, computa o estado de items do carrinho e preço total do carrinho. 
Renderiza condicionalmente EmptyCart caso tamanho do estado de items do carrinho seja 0. Constroi uma tabela 
usando grid, cada item do carrinho é representado por uma linha com seus dados e a soma do preço por quantidade 
daquele item, possuindo controlador de quantidade(caso alcance 0 o item é excluido do carrinho), um botão de 
remoção de item, e um botão para remover todos os items. No final é exibido o cálculo do total do carrinho e 
botões para continuar as compras ou finalizar que redireciona para a página de checkout.
```
shoppingCart.vue
```
CSF da página do carrinho de compras, que instância o cabeçalho, rodapé e o componente da lista de items do 
carrinho.
```
CheckoutForm.vue
```
CSF do formulário para preenchimento dos dados do usuário na finalização da compra, possui máscaras de cep, 
cpf, data de nascimento, telefone e estado. Neste componente há um observador que quando o cep é preeenchido 
totalmente é chamado um método que o valida, em caso inválido é disparado um alerta, no contrário será 
preenchido os campos: Endereço, Complemento, Bairro, Cidade e Estado com os dados retornados pela api "viacep".
É utilizado um método no submit do formulário que previne o comportamento padrão, e então valida se os campos 
obrigatorios estão preenchidos, se o e-mail está no formato correto, caso haja algum problema é renderizado um 
elemento contendo uma lista de erros a serem corrigidos. Caso contrário é chamado o componente de modal de 
sucesso.

O tamanho relativo das colunas são alterados de acordo com o tamanho do viewport para melhor visualização.
```
SuccessModal
```
CSF de um modal de sucesso que recebe uma string que é utilizado como mensagem principal, possui um botão X 
para fechar o modal, um ícone de sucesso, e um link para voltar para página inicial(de produtos).
```
CheckoutPage.vue
```
CSF da página de checkout que instância o cabeçalho, o rodapé, o formulário e renderiza condicionalmente o 
modal de sucesso. Quando este componente é criado, é verificado se o carrinho possui algum item adicionado, 
e se não tem o usuário é redirecionado para a página de produtos.
```

## Models
Products.ts
```
Interface que define as propriedades de um produto: id, name, categoria, descrição, preço e uri da imagem.
```
## Store

shop/cart.js
```
Store referente ao carrinho de compras, possui getters que retornam a quantidade total de items no carrinho 
(usado para atualizar o ícone no menu) e que retorna o preço total do carrinho. Mutations para adicionar um 
item ao carrinho, remover um item, subtrair um item do carrinho, remover todos os items e restaurar do local 
storage. State da lista de items do carrinho.
```
shop/inputs.js
```
Store referente aos dados de entrada da loja. Possui mutations para definir o termo pesquisado, para mover o 
banner rotativo para o próximo banner, e para mudar o banner rotativo para um banner específico. State do termo 
pesquisado e da posição do banner rotativo.
```

shop/checkout.js
```
Store referente a parte de checkout. Possui mutations para abrir e fechar o modal de sucesso e state para 
controlar a renderização do modal.
```

## Detalhes de implementação
Foi utilizado o padrão de formatação de código do eslint e pretier.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
