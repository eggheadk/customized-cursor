import type { AppProps } from 'next/app'

import '@/styles/globals.scss'
import '@/styles/components/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
