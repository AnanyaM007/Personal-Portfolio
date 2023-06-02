import React from 'react';
import Head from 'next/head';
function Layout({ children }) {
  return (
    <div>
      <Head>
      <link rel="icon" href="/logoLight.png" />
        <title>Ananya Mohapatra</title>
      </Head>
        {children}
    </div>
  );
}

export default Layout;
