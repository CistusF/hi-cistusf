import Image from 'next/image';
import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <Link href={{ pathname: "/" }} replace>
                <Image src={"/profile.jpeg"} alt={"profile"} width={50} height={50} />
            </Link>
            <div className={styles.items}>
                <Link href={{ pathname: "/", hash: 'about' }} replace>
                    About
                </Link>
                <Link href={{ pathname: "/", hash: 'projects' }} replace>Projects</Link>
                <Link href={{ pathname: "/", hash: 'contact' }} replace>Contact</Link>
            </div>
            <div className={styles.divider} />
            <div className={styles.links}>
                <Link href={"https://github.com/CistusF"}>
                    <Image src={"/github.svg"} alt={"Github"} width={30} height={30} />
                </Link>
                <Link href={"https://CistusF.github.io/My-SNS"}>
                    <Image src={"/My-SNS.svg"} alt={"My-SNS"} width={30} height={30} />
                </Link>
            </div>
            <Link href={""}>
                <Image src={"/MENU.svg"} alt={"menu"} width={30} height={30} />
            </Link>
        </div>
    )
};