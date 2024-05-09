"use client"

import s from "@/components/Navigator.module.css";

export const Navigator = () => {
  return (
    <nav className={s.container}>
      <span className={s.logo}>
        <img src="streamby-logo.svg" alt="logo" width={"200px"} />
      </span>
    </nav>
  );
}
