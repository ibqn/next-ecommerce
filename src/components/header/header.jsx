import { CartContext } from 'hooks/use-cart'
import { SidebarContext } from 'hooks/use-context'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { classNames } from 'util/class-names'
import Logo from './logo.svg'

export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { toggleOpen } = useContext(SidebarContext)
  const { cartAmmount } = useContext(CartContext)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header
      className={classNames(
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6',
        'fixed z-10 w-full transition-all'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo className="w-[40px]" />
        </Link>
        <div className="relative flex cursor-pointer" onClick={toggleOpen}>
          <BsBag className="text-2xl" />
          {cartAmmount > 0 && (
            <div className="absolute -right-2 -bottom-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 text-[12px] text-white">
              {cartAmmount}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
