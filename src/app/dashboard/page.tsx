"use client"

import { LateralMenu } from "@/components/LateralMenu/LateralMenu";
import { getUserToken } from "@/helpers/LocalStorage.functions";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  let token : string | null = null;

  useEffect(() => {
    token = getUserToken();
    !token && router.push('/login');
  }, [token]);

  return (
    <div className='dashboard-container'>
     <LateralMenu />
    </div>
  );
};
