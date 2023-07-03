import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'
import { SizeObserver } from '../utils/size-observer'
import s from '../styles/splash.module.scss'

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const splash = document.querySelector('.splash')
  //     if (splash)
  //       setTimeout(() => {
  //         splash.classList.add('display-none')
  //       }, 1000)
  //   }
  // }, [])
  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  )
}
export default MyApp
