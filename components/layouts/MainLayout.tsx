import { FC, PropsWithChildren } from "react";

import Head from "next/head";

import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

type Props = {};

export const MainLayout : FC<PropsWithChildren <Props> > = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aplicacion Next JS - Udemy</title>
        <meta name="description" content="Aplicacion Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
