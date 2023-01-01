import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { classNames } from 'util/class-names'
import { useContext } from 'react'
import { SidebarContext } from 'hooks/use-context'
import { CartContext } from 'hooks/use-cart'
import { CartItem } from './cart-item'

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, cartAmmount } = useContext(CartContext)

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
          console.log(item)
          return <CartItem key={key} cartItem={item} />
        })}
      </div>
    </div>
  )
}
