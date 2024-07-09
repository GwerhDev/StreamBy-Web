"use client";

import s from "./Navigator.module.css";
import Link from "next/link";
import { NavMenu } from "@/components/Navigator/NavMenu";
import { NavAuth } from "@/components/Navigator/NavAuth";

export const Navigator = () => {
  return (
    <nav className={s.container}>
      <Link href={'/'} className={s.logo}>
        <img src="streamby-logo.svg" alt="logo" width={"110px"} />
      </Link>
      <NavMenu />
      <NavAuth />
    </nav>
  );
};
