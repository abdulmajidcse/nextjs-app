import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import { ThemeContextProvider } from '../contexts/themeContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <ToastContainer />
        <Component {...pageProps} />
        <Footer />
      </ThemeContextProvider>
    </>
  )
}

export default MyApp
