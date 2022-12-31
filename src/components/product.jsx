export const Product = (props) => {
  const { className, product } = props
  const { title } = product

  return <div className={className}>{title}</div>
}
