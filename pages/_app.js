import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
