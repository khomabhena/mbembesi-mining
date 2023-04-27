import { AuthContext } from '@/context/AuthContext'
import { StateContext } from '@/context/StateContext'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
      <Component {...pageProps} />
  )
}
