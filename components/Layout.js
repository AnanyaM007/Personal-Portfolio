import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import theme from '../theme/typography';
function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Head>
      <link rel="icon" href="MainLogo.png" />
        <title>Ananya Mohapatra</title>
      </Head>
        {children}
    </div>
    </ThemeProvider>
  );
}

export default Layout;
