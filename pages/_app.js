/* eslint-disable react/jsx-props-no-spreading */
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ThemeContextProvider } from '../contexts/themeContext';

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
    );
}

export default MyApp;
