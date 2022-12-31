import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { classNames } from 'util/class-names'
import { useContext } from 'react'
import { SidebarContext } from 'hooks/use-context'

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  return (
    <div
      className={classNames(
        'fixed top-0 z-20 h-full w-full bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:px-[35px] xl:max-w-[30vw]',
        isOpen ? 'right-0' : '-right-full'
      )}
    >
      Sidebar
    </div>
  )
}
