import 'styles/globals.css'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { SidebarProvider } from 'hooks/use-context'
import { Header } from 'components/header'
import { Sidebar } from 'components/sidebar'
import { Footer } from 'components/footer'
import { CartProvider } from 'hooks/use-cart'

import { Poppins } from '@next/font/google'
import { classNames } from 'util/class-names'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SidebarProvider>
          <CartProvider>
            <div className={classNames(poppins.variable, 'font-primary')}>
              <Header />
              <Sidebar />
              <Component {...pageProps} />
              <Footer />
            </div>
          </CartProvider>
        </SidebarProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
