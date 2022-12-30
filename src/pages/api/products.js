import { products } from 'mock'

export default function handler(req, res) {
  const nextRequestMeta =
    req[
      Reflect.ownKeys(req).find((s) => String(s) === 'Symbol(NextRequestMeta)')
    ]

  const protocol = nextRequestMeta._protocol

  res.status(200).json(
    products.map((product) => ({
      ...product,
      image: `${protocol}://${req.headers.host}/images/${product.image}`,
    }))
  )
}
