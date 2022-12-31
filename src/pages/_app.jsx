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

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SidebarProvider>
          <Header />
          <Sidebar />
          <Component {...pageProps} />
          <Footer />
        </SidebarProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
