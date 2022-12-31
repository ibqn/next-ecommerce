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
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px] md:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {data.map((product) => {
              const { id } = product
              return <Product product={product} key={id} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
