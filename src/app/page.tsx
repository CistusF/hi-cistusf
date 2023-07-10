import Image from 'next/image';
import styles from './page.module.css';
import Nav from 'modules/components/Nav';
import Card from 'modules/components/Card';
import Footer from 'modules/components/Footer';
import Link from 'next/link';

const about = [
  {
    title: "Nick/Name",
    description: "CistusF/Sung Min Woo"
  },
  {
    title: "Where",
    description: "I live in Gunsan, South Korea, Currently attending Jeonju University."
  },
  {
    title: "What",
    description: "Being a Javascript developer with hard work and passion for create new things. "
  },
  {
    title: "Position",
    description: "People call me, PM, PL, TA, DA, Fullstack Developer"
  }
];

const projects = [
  {
    title: "My-SNS",
    description: "Sharing your own sns to easy.",
    percent: 100
  },
  {
    title: "Equal",
    description: "Study with random word quiz!",
    percent: 40
  },
  {
    title: "Devist",
    description: "Project with peoples",
    percent: 20
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.content}>
          <p className={styles.title}>Hi, I&apos;m CistusF</p>
          <p className={styles.description}>Find, Mind, Bind, Remind</p>
        </div>
        <div className={styles.icon}>
          <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="169" height="169" rx="2" stroke="white" strokeWidth="2" />
            <path d="M22 25L28 31.5L22 38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path className={styles.cursor} d="M38 38H52" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M141.357 119.311L117.294 143.374L117.294 143.374L117.288 143.38L117.288 143.38C117.277 143.391 117.266 143.402 117.255 143.413C117.093 143.575 116.949 143.718 116.848 143.897C116.746 144.076 116.697 144.273 116.642 144.496C116.638 144.511 116.634 144.526 116.631 144.541L114.092 154.695L114.085 154.722C114.046 154.879 114.004 155.046 113.99 155.187C113.975 155.341 113.979 155.602 114.188 155.812C114.398 156.021 114.659 156.025 114.813 156.01C114.954 155.996 115.121 155.954 115.278 155.915L115.305 155.908L125.459 153.369C125.474 153.366 125.489 153.362 125.504 153.358C125.727 153.303 125.924 153.254 126.103 153.152C126.282 153.051 126.425 152.907 126.587 152.745C126.598 152.734 126.609 152.723 126.62 152.712L150.689 128.643L150.713 128.619C151.026 128.306 151.296 128.036 151.483 127.791C151.684 127.528 151.836 127.235 151.836 126.875C151.836 126.515 151.684 126.222 151.483 125.959C151.296 125.714 151.026 125.444 150.713 125.13L150.689 125.107L144.893 119.311L144.87 119.287C144.556 118.974 144.286 118.704 144.041 118.517C143.778 118.316 143.485 118.164 143.125 118.164C142.765 118.164 142.472 118.316 142.209 118.517C141.964 118.704 141.694 118.974 141.38 119.287L141.357 119.311Z" stroke="white" />
            <path d="M135.938 122.562L144.562 116.812L153.188 125.438L147.438 134.062L135.938 122.562Z" fill="white" />
          </svg>
          <span>Devist</span>
        </div>
      </div>
      <Nav />
      <div className={styles.about} id="about">
        <span>About</span>
        <div className={styles.contents}>
          <Image src={"/profile.jpeg"} alt={"Profile"} width={250} height={250} />
          <div className={styles.content}>
            {
              about.map(({ title, description }) => {
                return <div className={styles.info} key={title}>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.description}>{description}</p>
                </div>
              })
            }
          </div>
        </div>
      </div>
      <div className={styles.projects} id="projects">
        <span>Projects</span>
        {
          projects.map(({ title, description, percent }) => {
            return <Card key={title} title={title} description={description} processing={percent} />
          })
        }
      </div>
      <div className={styles.contact} id="contact">
        <div className={styles.content}>
          <span>contact</span>
          <p>Feel free to contact me.</p>
        </div>
        <div className={styles.links}>
          <Link href={"https://github.com/CistusF"}>
            <Image src={"/github.svg"} alt={"Github"} width={50} height={50} />
          </Link>
          <Link href={"https://CistusF.github.io/My-SNS"}>
            <Image src={"/My-SNS.svg"} alt={"My-SNS"} width={50} height={50} />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
};