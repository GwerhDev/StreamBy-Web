"use client"

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { getUserToken } from "@/helpers/LocalStorage.functions";
import { LateralTab } from "@/components/LateralTab/LateralTab";
import { LateralMenu } from "@/components/LateralMenu/LateralMenu";
import { Browser } from "@/components/Browser/Browser";
import { LogoutModal } from "@/components/Modals/LogoutModal";

export default function DashboardPage() {
  const router = useRouter();
  let token: string | null = null;

  useEffect(() => {
    token = getUserToken();
    !token && router.push('/login');
  }, [token]);

  return (
    <div className='dashboard-container'>
      <LateralTab />
      <div className="dashboard-sections">
        <LateralMenu />
        <Browser />
      </div>
      <LogoutModal />
    </div>
  )
}
