"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserToken } from "@/helpers/LocalStorage.functions";

export const LoggedRedirection = () => {
  const router = useRouter();
  let token: string | null = null;

  useEffect(() => {
    token = getUserToken();
    token && router.push('/dashboard');
  }, [token]);

  return <></>
}
