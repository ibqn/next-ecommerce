import Image from 'next/image'
import { classNames } from 'util/class-names'
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import Link from 'next/link'

export const Product = (props) => {
  const { className, product } = props
  const { id, title, image, category, price } = product

  return (
    <div className={classNames(className)}>
      <div className="group relative mb-4 h-[300px] w-full overflow-hidden border border-grau transition">
        <div className="flex h-full w-full items-center justify-center">
          <div className="mx-auto flex w-[200px] items-center justify-center">
            <Image
              className="max-h-[160px] w-auto transition duration-300 group-hover:scale-110"
              src={image}
              width={300}
              height={300}
              priority
              alt={title}
            />
          </div>
          <div className="absolute top-6 -right-12 flex flex-col justify-center gap-y-2 p-2 opacity-0 transition-all duration-300 group-hover:right-5 group-hover:opacity-100">
            <button>
              <div className="flex h-12 w-12 items-center justify-center bg-red-500 text-white">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              href={`/product/${id}`}
              className="flex h-12 w-12 items-center justify-center bg-white text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-1 text-sm capitalize text-gray-500">{category}</div>
        <Link href={`/product/${id}`}>
          <h2 className="mb-1 font-semibold">{title}</h2>
        </Link>

        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  )
}
