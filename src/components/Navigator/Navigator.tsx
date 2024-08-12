"use client";

import { useEffect } from "react";
import s from "./Navigator.module.css";
import Link from "next/link";
import { NavMenu } from "@/components/Navigator/NavMenu";
import { NavAuth } from "@/components/Navigator/NavAuth";

export const Navigator = () => {
  useEffect(() => {
    const handleScroll = () => {
      const container: any = document.querySelector(`.${s.container}`);
      if (window.scrollY > 0) {
        container.classList.add(s.scrolled);
      } else {
        container.classList.remove(s.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={s.container}>
      {
        <nav className={s.navigator}>
          <Link href={'/'} className={s.logo}>
            <img src="streamby-logo.svg" alt="logo" width={"110px"} />
          </Link>
          <>
            <NavMenu />
            <NavAuth />
          </>
        </nav>
      }
    </div>
  )
}
