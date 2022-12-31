import { createContext, useState } from 'react'

export const SidebarContext = createContext(null)

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <SidebarContext.Provider value={{ isOpen, handleClose, toggleOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}
