"use client";

import s from "./Navigator.module.css";
import Link from "next/link";
import { NavMenu } from "@/components/Navigator/NavMenu";
import { NavAuth } from "@/components/Navigator/NavAuth";
import { useEffect, useState } from "react";

export const Navigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log(token)
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
