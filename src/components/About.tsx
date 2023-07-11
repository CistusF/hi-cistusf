'use client';

import Image from 'next/image';
import styles from './About.module.css';
import { useEffect, useRef } from 'react';

export default function About({ title, description }: { title: string, description: string }) {
    const info = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (info.current && target.isIntersecting) {
                info.current.style.transform = 'translate(0, 0)';
            };
        });
        observer.observe(info.current!);
    }, []);
    return (
        <div ref={info} className={styles.info}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
};