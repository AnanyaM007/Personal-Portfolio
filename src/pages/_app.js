import { useEffect } from 'react';
import '@/styles/globals.css';
import './../styles/contact.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return <Component {...pageProps} />;
}
