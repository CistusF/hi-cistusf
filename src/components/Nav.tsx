import Image from 'next/image';
import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.items}>
                <Image src={"/profile.jpeg"} alt="profile" width={50} height={50} />
                <Link href={"#about"}>About</Link>
                <Link href={"#projects"}>Projects</Link>
                <Link href={"#contact"}>Contact</Link>
            </div>
            <div className={styles.divider}/>
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