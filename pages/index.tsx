import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { MainLayout } from "../components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Editar el archivo <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
