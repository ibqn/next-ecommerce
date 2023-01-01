export const ProductDetails = ({ id }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>product: {id}</h1>
        <p>product details</p>
      </div>
    </div>
  )
}
