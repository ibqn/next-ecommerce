import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { classNames } from 'util/class-names'
import { useContext } from 'react'
import { SidebarContext } from 'hooks/use-context'
import { CartContext } from 'hooks/use-cart'
import { CartItem } from './cart-item'

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, cartAmmount } = useContext(CartContext)

  return (
    <div
      className={classNames(
        'fixed top-0 z-20 h-full w-full bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:px-[35px] xl:max-w-[30vw]',
        isOpen ? 'right-0' : '-right-full'
      )}
    >
      <div className="flex items-center justify-between border-b py-6">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({cartAmmount})
        </div>
        <div
          onClick={handleClose}
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div>
        {[...cart].map(([key, item]) => {
          return <CartItem key={key} cartItem={item} />
        })}
      </div>

      <div className="mt-4 flex flex-col gap-y-3 py-4">
        <div className="flex items-center justify-between bg-pink-200">
          <div className="font-semibold uppercase">
            <span className="mr-2">Total:</span>$ 1000
          </div>
          <div
            onClick={clearCart}
            className="flex h-12 w-12 cursor-pointer items-center justify-center py-4 text-xl text-white"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  )
}
