import { SidebarContext } from 'hooks/use-context'
import { useContext } from 'react'
import { BsBag } from 'react-icons/bs'

export const Header = () => {
  const { toggleOpen } = useContext(SidebarContext)
  return (
    <div className="flex items-center justify-center">
      <div>Header</div>
      <div className="relative flex cursor-pointer" onClick={toggleOpen}>
        <BsBag className="text-2xl" />
      </div>
    </div>
  )
}
