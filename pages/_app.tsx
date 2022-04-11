import { ReactElement } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  createLayout?: ( page:ReactElement ) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component : NextPageWithLayout
}

function MyApp({ Component, pageProps } : AppPropsWithLayout) {
  // return <Component {...pageProps} />
  const getLayout = Component.createLayout || ( (asd) => asd )
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
