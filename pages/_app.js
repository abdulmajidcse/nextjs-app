/* eslint-disable react/jsx-props-no-spreading */
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { ThemeContextProvider } from '../contexts/themeContext';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    // Some page has started loading
    // can get url in parameter
    Router.onRouteChangeStart = () => {
        setLoading(true);
    };

    // Some page has finished loading
    // can get url in parameter
    Router.onRouteChangeComplete = () => {
        setLoading(false);
    };

    // an error occurred.
    // can get error, url in parameter
    Router.onRouteChangeError = () => {
        setLoading(false);
        toast.error('Something went wrong!');
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <ThemeContextProvider>
                <Header />
                <Loading show={loading} />
                <ToastContainer />
                <Component {...pageProps} />
                <Footer />
            </ThemeContextProvider>
        </>
    );
}

export default MyApp;
