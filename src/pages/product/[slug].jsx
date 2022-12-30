import { useRouter } from 'next/router'

export default function ProductDetails() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>product: {router.query.slug}</h1>
      <p>product details</p>
    </div>
  )
}
