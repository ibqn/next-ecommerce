import { useRouter } from 'next/router'

export default function ProductDetails() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>product: {router.query.id}</h1>
        <p>product details</p>
      </div>
    </div>
  )
}
