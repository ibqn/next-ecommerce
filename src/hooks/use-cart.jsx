import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(new Map())
  const [cartAmmount, setCartAmmount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const addToCart = (product) => {
    const { id } = product

    const cartItem = cart.has(id) ? cart.get(id) : { ...product, ammount: 0 }

    const newCart = new Map(cart)
    newCart.set(id, { ...cartItem, ammount: cartItem.ammount + 1 })
    setCart(newCart)

    setCartAmmount(cartAmmount + 1)
    setTotalPrice(totalPrice + product.price)
  }

  const removeFromCart = (product) => {
    const { id } = product

    const cartItem = cart.get(id)

    const newCart = new Map(cart)
    newCart.set(id, { ...cartItem, ammount: cartItem.ammount - 1 })
    if (cartItem.ammount === 1) {
      newCart.delete(id)
    }
    setCart(newCart)

    setCartAmmount(Math.max(0, cartAmmount - 1))
    setTotalPrice(Math.max(0, totalPrice - product.price))
  }

  const deleteFromCart = (product) => {
    const { id } = product

    const newCart = new Map(cart)
    newCart.delete(id)
    setCart(newCart)
    setCartAmmount(Math.max(0, cartAmmount - cart.get(id).ammount))
    setTotalPrice(
      Math.max(0, totalPrice - product.price * cart.get(id).ammount)
    )
  }

  const clearCart = () => {
    const newCart = new Map()
    setCart(newCart)
    setCartAmmount(0)
    setTotalPrice(0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmmount,
        totalPrice,
        clearCart,
        addToCart,
        removeFromCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
