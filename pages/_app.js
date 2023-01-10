import '../styles/globals.css'
import styles from "../styles/Home.module.css"
import MainLayout from '../src/componnents/MainLayout'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet"></link>
      </Head>
     <MainLayout>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
       
     </MainLayout>
     
  </>
  )
}
