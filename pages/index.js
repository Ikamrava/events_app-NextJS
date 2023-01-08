import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'





const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {

  const eventsTitle = data.map(item=>{
    return (
      <Link href={`./events/${item.id.toLowerCase()}`}>
      <h2>{item.title}</h2>
      <img src ={item.image}  className={styles.mainImgs} alt="Picture of the author"></img>
      <h4>{item.description}</h4>
      </Link>
    )
  })



  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
          <nav>
            <img></img>
            <a href=''>Home</a>
            <a href='./events'>Events</a>
            <a href='./about-us'>About Us</a>
          </nav>
        </header>

      <main className={styles.main}>
        {eventsTitle}
      </main>

      <footer className='{styles.footer}'>
        <p></p>
      </footer>
    </>
  )
}



export async function getServerSideProps(){
  const {events_categories} = await import("./data/data.json")
  
  return{
    props:{
      data:events_categories
    }
  }
}

