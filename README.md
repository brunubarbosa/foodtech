## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
## Sobre o projeto:

Este é um desafio tecnico com o objetivo de fazer uma tela de checkout de um delivery, devendo conter ao menos 3 passos de definição de tipo da pizza.
Priorizando a simplicidade esse projeto tem apenas um container onde a pessoa é direcionada para completar o fluxo da compra baseado em um fluxo normal e um fluxo de promoção onde o usuário é informado que recebeu pontos por isso

## Arquitetura:
O projeto está com uma arquitetura simples, não foi necessário usar um gerenciado de estado e não conta com typescript

### SWR:
está sendo usado para gerenciar os requests que são feito para o backend, cacheando e aplicando conceitos de optimistic UI para melhorar a usabilidade

### MSW:
Está sendo usado o MSW para através do service worker mockar as respostas do back end para as requests feitas através do SWR, isso também facilita para definir as respostas às requests em momento de teste, removendo a necessidade de mockar o axios e deixando a aplicação rodar como seria em ambiente de produção
