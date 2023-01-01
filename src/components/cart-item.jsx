import { CartContext } from 'hooks/use-cart'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io'

export const CartItem = ({ cartItem }) => {
  const { id, title, price, image, ammount } = cartItem
  const { addToCart, removeFromCart, deleteFromCart } = useContext(CartContext)
  return (
    <div className="flex gap-x-4 border-b border-gray-200 py-2 font-light text-gray-500 lg:px-6">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        <Link href={`/product/${id}`}>
          <Image
            className="h-auto max-w-[80px]"
            width={300}
            height={300}
            src={image}
            alt={title}
          />
        </Link>
        <div className="flex w-full flex-col">
          <div className="mb-2 flex justify-between">
            <Link
              className="max-w-[240px] text-sm font-medium uppercase text-primary hover:underline"
              href={`/product/${id}`}
            >
              {title}
            </Link>
            <div
              onClick={() => deleteFromCart(cartItem)}
              className="cursor-pointer text-xl"
            >
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </div>
          </div>
          <div className="flex h-[36px] gap-x-2 text-sm">
            <div className="flex h-full max-w-[100px] flex-1 items-center border font-medium text-primary">
              <div
                onClick={() => removeFromCart(cartItem)}
                className="flex h-full flex-1 cursor-pointer items-center justify-center"
              >
                <IoMdRemove />
              </div>
              <div className="flex h-full items-center justify-center px-2">
                {ammount}
              </div>
              <div
                onClick={() => addToCart(cartItem)}
                className="flex h-full flex-1 cursor-pointer items-center justify-center"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            <div className="flex flex-1 items-center justify-end font-medium text-primary">
              $ {parseFloat(price * ammount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
