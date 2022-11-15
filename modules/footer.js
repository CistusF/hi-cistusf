import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
            <footer className={styles.infos}>
                <div>
                    <p>
                        Socials
                    </p>
                    <li>
                        <a href='https://github.com/CistusF'>Github</a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/@cistus'>Youtube</a>
                    </li>
                    <li>
                        <a href='https://discord.gg/ZhUujTPPpq'>Discord</a>
                    </li>
                </div>
                <div>
                    <p>
                        Map
                    </p>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/license'>License</a>
                    </li>
                    <li>
                        <a href='https://wbot.vercel.app/'>WBOT</a>
                    </li>
                </div>
            </footer>
        </>
    )
}