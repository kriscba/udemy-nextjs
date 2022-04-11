import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { MainLayout } from "../../components/layouts/MainLayout";
import { DarkLayout } from "../../components/layouts/DarkLayout";

export default function PricingPage() {
  return (
    <MainLayout>
      <h1 className={ 'title' }>
        <a>Pricing</a>
      </h1>

      <p className={ 'description' }>
        Editar el archivo <code className={ 'code' }>pages/pricing/index.js</code>
      </p>
    </MainLayout>
  );
}

// PricingPage.createLayout = ( page ) => {
//   return (
//     <DarkLayout>{ page }</DarkLayout>
//   )
// }
