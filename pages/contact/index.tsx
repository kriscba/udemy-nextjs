import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className={ 'title' }>
        <a href="#">Contacto</a>
      </h1>

      <p className={ 'description' }>
        Editar el archivo <code className={ 'code' }>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
