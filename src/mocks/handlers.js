import { rest } from 'msw'

export const handlers = [
  rest.get('/api/crusts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {name: 'New work', id: '1'},
        {name: 'Diet', id: '2'},
        {name: 'Sem glúten', id: '3'},
        {name: 'Integral', id: '4'},
        {name: 'Massa fina', id: '5'},
        {name: 'Estilo siciliano', id: '6'},
        {name: 'Massa napolitana', id: '7'}
      ]),
    )
  }),
  rest.get('/api/sizes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {name: 'Pequeno', id: '2'},
        {name: 'Grande', id: '3'},
        {name: 'Super grande', id: '4'},
        {name: 'No metro', id: '5'}
      ]),
    )
  }),
  rest.get('/api/flavours', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {name: 'Bacon', id: '2'},
        {name: 'Pepperoni', id: '3'},
        {name: 'Calabresa', id: '4'},
        {name: 'Brócolis', id: '5'},
        {name: 'Portuguesa', id: '6'},
        {name: 'Marguerita', id: '7'},
        {name: 'Muçarela', id: '9'},
        {name: 'Napolitana', id: '10'},
        {name: 'Brigadeiro', id: '11'},
        {name: 'Romeu e Julieta', id: '12'}
      ]),
    )
  }),
]