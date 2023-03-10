import { HOST_URI } from 'api/config'
import { products } from 'mock'
import { corsMiddleware } from 'util/cors-middleware'

export default async function handler(req, res) {
  const { id } = req.query

  await corsMiddleware(req, res)

  const [product] = products
    .filter((product) => String(product.id) === id)
    .map((product) => ({
      ...product,
      image: `${HOST_URI}/images/${product.image}`,
    }))

  res.status(200).json(product)
}
