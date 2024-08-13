"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserToken } from "@/helpers/LocalStorage.functions";

export const LoggedRedirection = (props: any) => {
  const { to } = props || null;

  const router = useRouter();
  let token: string | null = null;

  useEffect(() => {
    token = getUserToken();
    if (to) {
      token ? router.push('/dashboard') : router.push(to);
    }
    else {
      token ? router.push('/dashboard') : null;
    }
  }, [token]);

  return <></>
}
