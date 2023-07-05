import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '@/themes'
import '@/styles/globals.css'

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <main className={poppins.className}>
        <Component {...pageProps}/>
      </main>
    </NextUIProvider>
  )
}
