"use client"

import s from "@/components/Navigator.module.css";
import Link from "next/link";
import { NavMenu } from "./NavMenu";
import { NavAuth } from "./NavAuth";

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
