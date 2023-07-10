import Image from 'next/image';
import styles from './Card.module.css';
import Link from 'next/link';

export default function Nav({ title, description, processing }: { title: string, description: string, processing: number }) {
    return (
        <div className={styles.card}>
            <div className={styles.line} />
            <Image src={"/" + title + ".svg"} alt={title} width={80} height={80} />
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
            <svg width="120" height="120" viewBox="-11.25 -11.25 112.5 112.5" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{
                transform: "rotate(-90deg)"
            }}>
                <circle r="35" cx="45" cy="45" stroke="#FF6600" strokeWidth="7" strokeLinecap="round" strokeDashoffset={(219.8 - (processing * (219.8 / 100))) + "px"} fill="transparent" strokeDasharray="219.8px"></circle>
                <text x="25px" y="48px" fill="#fff" fontSize="15px" fontWeight="bold" style={{
                    transform: "rotate(90deg) translate(0px, -86px)",
                }}>{processing}%</text>
            </svg>
        </div>
    )
};