import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import { Navbar } from "../components/Navbar";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={"description"}>
          Editar el archivo <code className={"code"}>pages/about.js</code>
        </p>
    </>
  );
}

AboutPage.createLayout = ( page: JSX.Element ) => {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )

}
