import { HOST_URI } from 'api/config'
import { products } from 'mock'

export default function handler(req, res) {
  const { id } = req.query

  const [product] = products
    .filter((product) => String(product.id) === id)
    .map((product) => ({
      ...product,
      image: `${HOST_URI}/images/${product.image}`,
    }))

  res.status(200).json(product)
}