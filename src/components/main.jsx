import { useQuery } from '@tanstack/react-query'
import { getProducts } from 'api/products'

export const Main = () => {
  const { data, isLoading, error } = useQuery(['products'], getProducts)

  if (isLoading) {
    return <div>loading...</div>
  }

  return <div>Main</div>
}
