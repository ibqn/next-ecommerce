import { useQuery } from '@tanstack/react-query'
import { getProduct } from 'api/products'
import { CartContext } from 'hooks/use-cart'
import Image from 'next/image'
import { useContext } from 'react'

export const ProductDetails = ({ id }) => {
  const { addToCart } = useContext(CartContext)
  const { data, isLoading, error } = useQuery(['product', id], () =>
    getProduct(id)
  )

  if (isLoading) {
    return <div>loading...</div>
  }

  const { title, image, price, description } = data

  return (
    <section className="flex min-h-screen items-center pt-32 pb-12 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-8 flex flex-1 items-center justify-center lg:mb-0">
            <Image
              className="h-auto max-w-[200px] lg:max-w-sm"
              height={600}
              width={600}
              src={image}
              alt={title}
              priority
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="mx-auto mb-2 max-w-[450px] text-[26px] font-medium lg:mx-0">
              {title}
            </h1>
            <div className="mb-6 text-xl font-medium text-red-500">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(data)}
              className="bg-primary py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
