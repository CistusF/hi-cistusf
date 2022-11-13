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
        <title>Hi, I&apos;m CistusF</title>
        <meta name="description" content="Hello, I'm CistusF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <h2 className={styles.fadeIn}>Who am i?</h2>
          <h1 className={styles.slideIn}>I&apos;m CistusF</h1>
        </div>
        <div className={styles.main}>
          <div className={styles.tech}>
            <h1 className={`${styles.fadeIn} ${styles.techItem}`}>I can use</h1>
            <div className={`${styles.slideIn} ${styles.techItem} ${styles.stacks}`}>
              <li>HTML</li>
              <li>CSS</li>
              <li>C/C++</li>
              <li>Python</li>
              <ul>
                <li>selenium</li>
                <li>Flask</li>
              </ul>
              <li>Node.js</li>
              <ul>
                <li>Express</li>
                <li>Discord.js</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Nextjs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.tech}>
            <div className={`${styles.slideIn} ${styles.techItem} ${styles.stacks}`}>
              <li>Database</li>
              <ul>
                <li>MongoDB</li>
                <li>Mysql</li>
              </ul>
              <li>Front-End</li>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
              <li>Back-End</li>
              <ul>
                <li>Express</li>
              </ul>
              <li>ChatBot</li>
              <ul>
                <li>Discord</li>
                <li>KakaoTalk</li>
                <li>Telegram</li>
                <li>Twitch</li>
              </ul>
              <li>App</li>
              <ul>
                <li>Electron</li>
              </ul>
            </div>
            <h1 className={`${styles.fadeIn} ${styles.techItem}`}>Technology stack</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
