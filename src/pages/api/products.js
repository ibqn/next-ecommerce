import { HOST_URI } from 'api/config'
import { products } from 'mock'
import { corsMiddleware } from 'util/cors-middleware'

export default async function handler(req, res) {
  await corsMiddleware(req, res)

  res.status(200).json(
    products.map((product) => ({
      ...product,
      image: `${HOST_URI}/images/${product.image}`,
    }))
  )
}
