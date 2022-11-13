import Head from 'next/head';
import styles from '../styles/License.module.css';
import Footer from '../modules/footer';
import { useEffect } from 'react';

export default function License() {

    useEffect(() => {
        const addObserve = (style, animation) => {

            let elements = document.querySelectorAll("." + style);
            elements.forEach(i => animation.observe(i));
        }

        var slideIn = new IntersectionObserver((elements) => {
            const element = elements.find(i => i.isIntersecting);
            if (element?.target)
                element.target.style.clipPath = "polygon(0 0, 0 100%, 100% 100%, 100% 0)";
        });
        addObserve(styles.slideIn, slideIn);
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
                    <h1>Licenses</h1>
                    <div className={styles.slideIn}>
                        <h2>Fonts</h2>
                        <li><a href='https://fonts.cafe24.com' className={styles.cafe}>카페24단정해</a> - <a className={styles.License} href='/License.txt'>[License]</a></li>
                        <li><a href='https://hbios.quiple.dev' className={styles.hbios}>HBIOS-SYS</a> - <a className={styles.License} href='https://creativecommons.org/licenses/by-sa/4.0/deed.ko'>[License]</a></li>
                        <h2>Framework</h2>
                        <li><a href='https://github.com/vercel/next.js/tree/canary/packages/create-next-app'>create-next-app</a> - <a className={styles.License} href="https://github.com/vercel/next.js/blob/canary/license.md">[License]</a></li>
                        <h2>Image/Videos</h2>
                        <li><a href="https://www.pexels.com/video/blurry-screen-853919/">Pexels</a> - <a className={styles.License} href="https://www.pexels.com/creative-commons-images/">[License]</a></li>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
