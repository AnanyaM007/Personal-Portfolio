import '@/styles/globals.css';
import Layout from '../../components/Layout';
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an asynchronous operation
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout><Component {...pageProps} /></Layout>
      )}
    </>
  )
}