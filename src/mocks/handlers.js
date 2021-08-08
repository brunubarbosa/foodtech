import { rest } from 'msw'

export const handlers = [
  rest.get('/api/crusts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{name: 'New work', id: '1'},
      {name: 'Diet', id: '2'},
      {name: 'Sem glúten', id: '3'},
      {name: 'Integral', id: '4'},
      {name: 'Massa fina', id: '5'},
      {name: 'Estilo siciliano', id: '6'},
      {name: 'Massa napolitana', id: '7'},]),
    )
  }),
]