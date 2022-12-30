import { HOST_URI } from 'api/config'
import { products } from 'mock'

export default function handler(req, res) {
  res.status(200).json(
    products.map((product) => ({
      ...product,
      image: `${HOST_URI}/images/${product.image}`,
    }))
  )
}
