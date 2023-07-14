"use client";

import Image from 'next/image';
import styles from './Nav.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
    const [open, useOpen] = useState(false);
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
            <Image onClick={() => useOpen(true)} src={"/MENU.svg"} alt={"menu"} width={30} height={30} />
            <div style={
                open ? {
                    transform: "translate(0, 0)"
                } : {
                    transform: "translate(100%, 0)"
                }
            } className={styles.sideBar} onClick={() => useOpen(false)}>
                <div className={styles.sideLine}></div>
                <Image src={"/Cross.svg"} alt={"Cross"} width={30} height={30} />
                <span>Menus</span>
                <div className={styles.links}>
                    <Link href={{ pathname: "/", hash: 'about' }} replace>
                        About
                    </Link>
                    <Link href={{ pathname: "/", hash: 'projects' }} replace>Projects</Link>
                    <Link href={{ pathname: "/", hash: 'contact' }} replace>Contact</Link>
                </div>
                <span>Links</span>
                <div className={styles.links}>
                    <Link href={"https://github.com/CistusF"}>
                        Github
                    </Link>
                    <Link href={"https://CistusF.github.io/My-SNS"}>
                        My-SNS
                    </Link>
                </div>
            </div>
        </div>
    )
};