"use client"

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { getUserToken } from "@/helpers/LocalStorage.functions";
import { LateralTab } from "@/components/LateralTab/LateralTab";
import { LateralMenu } from "@/components/LateralMenu/LateralMenu";
import { Browser } from "@/components/Browser/Browser";
import { LogoutModal } from "@/components/Modals/LogoutModal";
import { EmptyBrowser } from "@/components/Browser/EmptyBrowser";

export default function DashboardPage() {
  const router = useRouter();
  let token: string | null = null;
  const [currentProject, setCurrentProject] = useState(null);

  const projectList = [
    {
      _id: 1,
      img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
      name: 'Project 1',
      description: 'This is a description of the project',
    },
    {
      _id: 2,
      img: '',
      name: 'Project 2',
      description: 'This is a description of the project',
    },
  ];

  function handleCurrentProject(project: any) {
    setCurrentProject(project);
  }

  useEffect(() => {
    token = getUserToken();
    !token && router.push('/login');
  }, [token]);

  return (
    <div className='dashboard-container'>
      <LateralTab projectList={projectList} action={handleCurrentProject} />
      {
        currentProject
          ?
          <div className="dashboard-sections">
            <LateralMenu project={currentProject} />
            <Browser />
          </div>
          :
          <div className="dashboard-sections">
            <EmptyBrowser />
          </div>
      }
      <LogoutModal />
    </div>
  )
}
