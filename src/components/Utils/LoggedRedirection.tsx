"use client"

import { getUserToken } from "@/helpers/LocalStorage.functions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const LoggedRedirection = () => {
  const router = useRouter();
  const token = getUserToken();
  
  useEffect(() => {
    token ? router.push('/dashboard') : null;
  }, [token]);

  return <></>;
};
