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
        <div className={`${styles.main} ${styles.fadeIn}`}>
          <h2>Who am i?</h2>
          <h1 className={styles.slideIn}>I&apos;m CistusF</h1>
        </div>
        <div className={styles.main}>
          <div className={styles.tech}>
            <h1 className={styles.fadeIn}>I can use</h1>
            <div className={`${styles.slideIn} ${styles.stacks}`}>
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
            <h1 className={`${styles.fadeIn} ${styles.techItem}`}>Technology stack</h1>
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
        <div className={styles.main}>
          <h1 className={styles.fadeIn}>My Projects</h1>
          <div className={`${styles.cards} ${styles.slideIn}`}>
            {[{
              title: "hi-cistusf",
              description: "Introduce my self"
            },
            {
              title: "typescript-discord-bot",
              description: "Easy to create Discord bot with Typescript"
            },
            {
              title: "discord.js_mongo",
              description: "Easy to connect Discord bot to MongoDB"
            },
            {
              title: "WBOT",
              description: "Open source discord chat bot"
            }
            ].map(({ title, description }) => {
              return <div key={title} className={styles.card}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <a href={`https://github.com/CistusF/${title}`}><div className={styles.button}>Github</div></a>
              </div>
            })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
