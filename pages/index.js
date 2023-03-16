import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Cart from '@/component/Cart'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Web News</title>
        <meta name='keyword' content='Web developement'/>
      </Head>
      <Cart />
      <h1>hello i am in index js</h1>
    </div>
  )
}
