'use client'

import Image from 'next/image';
import styles from './Card.module.css';
import { useEffect, useRef } from 'react';
export default function Card({ title, description, processing }: { title: string, description: string, processing: number }) {
    const card = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (card.current && target.intersectionRatio > 0) {
                card.current.style.transform = 'translate(0, 0)';
            };
        });
        observer.observe(card.current!);
    }, []);

    return (
        <div ref={card} className={styles.card}>
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