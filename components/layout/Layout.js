import styles from './layout.module.css';
import Head from 'next/head';
import Footer from './Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import GA4React from 'ga-4-react';
const ga4react = new GA4React('G-HJBEBD0WEL');

export default function Layout({ children }) {
  const router = useRouter();
  useEffect(() => {
    ga4react.initialize().then(
      (ga4) => {
        ga4.pageview(router.pathname);
      },
      (err) => {
        console.error(err);
      }
    );
  });
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        {children}
        <Footer />
      </div>
    </>
  );
}
