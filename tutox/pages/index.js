import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keyword" content="caesar"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus aliquid optio eaque aut odit, sint doloribus et culpa praesentium nulla necessitatibus pariatur cupiditate, iusto itaque nihil mollitia cumque sed.</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore expedita iste vel neque rem nesciunt praesentium laborum natus tenetur, nobis consequuntur exercitationem, illo maiores maxime ipsum a cumque laboriosam incidunt.</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
      </div>
      </>
  )
}
