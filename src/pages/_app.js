import '@/styles/globals.css';
import Layout from '../../components/Layout';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return <Layout><Component {...pageProps} /></Layout>;
}