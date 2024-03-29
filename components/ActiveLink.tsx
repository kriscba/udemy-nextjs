// import Link from "next/link";
import { CSSProperties, FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";


const style: CSSProperties = {
  color: '#007073',
  textDecoration: 'underline'
}

type  Props = {
  text: string,
  href: string
}

export const ActiveLink:FC<Props> = ({ text, href }) => {

  const { asPath } = useRouter();
  return (
    <>
    <Link href={ href }>
      <a style={ asPath === href ? style : undefined } >{ text }</a>
    </Link>
    </>
  )
}
