import Image from 'next/image';
import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.items}>
                <Link href={"/#"} scroll={false}>
                    <Image src={"/profile.jpeg"} alt={"profile"} width={50} height={50} />
                </Link>
                <Link href={{ pathname: "/", hash: 'about' }} replace>
                    <p>About</p>
                </Link>
                <Link href={{ pathname: "/", hash: 'projects' }} replace>Projects</Link>
                <Link href={{ pathname: "/", hash: 'contact' }} replace>Contact</Link>
            </div>
            <div className={styles.divider} />
            <div className={styles.links}>
                <Link href={"https://github.com/CistusF"}>
                    <Image src={"/github.svg"} alt={"Github"} width={50} height={50} />
                </Link>
                <Link href={"https://CistusF.github.io/My-SNS"}>
                    <Image src={"/My-SNS.svg"} alt={"My-SNS"} width={50} height={50} />
                </Link>
            </div>
        </div>
    )
};