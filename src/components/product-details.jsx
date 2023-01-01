import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

export const ProductDetails = ({ id }) => {
  const { data, isLoading, error } = useQuery(['product', id], () =>
    getProduct(id)
  )

  if (isLoading) {
    return <div>loading...</div>
  }

  const { title, image } = data

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>product: {id}</h1>
        <p>product details: {title}</p>
        <div>
          <Image
            className="h-auto max-w-[100px]"
            height={300}
            width={300}
            src={image}
            alt={title}
          />
        </div>
      </div>
    </div>
  )
}
