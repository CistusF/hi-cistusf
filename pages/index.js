import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../modules/footer';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const addObserve = (datas) => {
      datas.forEach(i => {
        let elements = document.querySelectorAll("." + i[0]);
        elements.forEach(j => i[1].observe(j));
      });

    }
    var fadeIn = new IntersectionObserver((elements) => {
      const element = elements.find(i => i.isIntersecting);
      if (element?.target)
        element.target.style.opacity = 1;
    });

    var slideIn = new IntersectionObserver((elements) => {
      const element = elements.find(i => i.isIntersecting);
      setTimeout(() => {
        if (element?.target)
          element.target.style.clipPath = "polygon(0 0, 0 100%, 100% 100%, 100% 0)";
      }, 1000);
    });

    addObserve([[styles.fadeIn, fadeIn], [styles.slideIn, slideIn]]);
  })
  return (
    <>
      <Head>
        <title>Hi, I'm CistusF</title>
        <meta name="description" content="Hello, I'm CistusF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.fadeIn}>Hi</h1>
          <h1 className={styles.slideIn}>I'm CistusF</h1>
        </main>
        <main className={styles.main}>
          <h1 className={styles.slideIn}>Animation Test</h1>
        </main>
      </div>
      <Footer />
    </>
  )
}
