import { AuthContext } from '@/context/AuthContext'
import { StateContext } from '@/context/StateContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
      <Component {...pageProps} />
  )
}
