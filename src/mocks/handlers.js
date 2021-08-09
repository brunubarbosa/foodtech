import { rest } from 'msw'
import mockCrusts from './mockCrusts'
import mockSizes from './mockSizes'
import mockFlavors from './mockFlavors'
import {mockBuy, mockBuyPoints} from './mockBuy'
import mockPromotion from './mockPromotion'

export const handlers = [
  rest.get('/api/crusts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockCrusts),
    )
  }),
  rest.get('/api/sizes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockSizes),
    )
  }),
  rest.get('/api/flavors', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockFlavors),
    )
  }),
  rest.post('/api/buy', (req, res, ctx) => {
    const {isPromotion} = req.body
    return res(
      ctx.status(200),
      ctx.json(isPromotion ? mockBuyPoints : mockBuy),
    )
  }),
  rest.get('/api/promotion', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockPromotion),
    )
  }),
]