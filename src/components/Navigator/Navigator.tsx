"use client";

import s from "./Navigator.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavMenu } from "@/components/Navigator/NavMenu";
import { NavAuth } from "@/components/Navigator/NavAuth";
import { getUserToken } from "@/helpers/LocalStorage.functions";

export const Navigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token: string = getUserToken() || "";

    console.log(isLoggedIn, userData);

    if (token) {
      fetch('/api/controllers/auth', {
        method: 'GET',
        headers: {
          'Authorization': token
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.logged) {
            setIsLoggedIn(true);
            setUserData(data.user);
          }
        })
        .catch(error => {
          console.error('Error fetching auth status:', error);
        });
    }
  }, []);

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
