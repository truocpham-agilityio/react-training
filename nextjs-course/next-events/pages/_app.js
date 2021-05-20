import DefaultLayout from '../components/layout/DefaultLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
