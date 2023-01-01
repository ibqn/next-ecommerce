import Image from 'next/image'
import Link from 'next/link'
import WomanHero from './woman_hero.png'

export const Hero = () => {
  return (
    <section className="h-[800px] bg-pink-200 bg-hero bg-cover bg-center bg-no-repeat py-24">
      <div className="container mx-auto flex h-full justify-around">
        <div className="flex flex-col justify-center">
          <div className="flex items-center font-semibold uppercase">
            <div className="mr-3 h-[2px] w-10 bg-red-500"></div>New Trend
          </div>

          <h1 className="mb-4 text-[70px] font-extralight uppercase leading-[1.1]">
            Automn Sale Stylish <br />
            <span className="font-semibold">Womens</span>
          </h1>
          <Link
            className="self-start border-b-2 border-primary font-semibold uppercase"
            href={'/'}
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <Image src={WomanHero} alt="Woman" />
        </div>
      </div>
    </section>
  )
}
