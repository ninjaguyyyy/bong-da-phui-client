import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Bong da Phui!</a>
        </h1>

        <p className={styles.description}>The system is developing ... </p>

        <div className={styles.grid}>
          <Link href="/messenger">
            <a className={styles.card}>
              <h2>Messenger &rarr;</h2>
              <p>Feature use Socket IO Client to connect with Server.</p>
            </a>
          </Link>

          <Link href="/login">
            <a className={styles.card}>
              <h2>Login &rarr;</h2>
              <p>
                User can login to use specified features and save information.
              </p>
            </a>
          </Link>

          <a href="#" className={styles.card}>
            <h2>Developing &rarr;</h2>
            <p>
              This feature is developing. Please wait for some day to enjoy it
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Developing &rarr;</h2>
            <p>
              This feature is developing. Please wait for some day to enjoy it
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
