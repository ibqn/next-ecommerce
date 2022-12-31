import { useQuery } from '@tanstack/react-query'
import { getProducts } from 'api/products'
import { Product } from 'components/product'

export const Main = () => {
  const { data, isLoading, error } = useQuery(['products'], getProducts)

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <section>
        <div className="container mx-auto">
          {data.map((product) => {
            const { id } = product
            return <Product product={product} key={id} />
          })}
        </div>
      </section>
    </div>
  )
}
