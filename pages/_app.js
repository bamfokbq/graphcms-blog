import { useEffect, useState } from 'react';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import { Layout } from '/components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
