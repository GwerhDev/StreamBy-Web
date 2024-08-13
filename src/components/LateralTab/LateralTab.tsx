import s from './LateralTab.module.css';
import { ProjectButton } from '../Buttons/ProjectButton';

export const LateralTab = (props: any) => {
  const { projectList, action } = props || null;

  const handleLogoutModal = () => {
    const logoutModal = document.getElementById('logout-modal') as HTMLDivElement | null;
    if (logoutModal) {
      logoutModal.style.display = 'flex';
    }
  };

  return (
    <div className={s.container}>
      <img src="streamby-icon.svg" alt="StreamBy Icon" height={25} />
      <ul className={s.projects}>
        {
          projectList?.map((project: any, index: number) => (
            <li key={index}>
              <ProjectButton project={project} action={action} />
            </li>
          ))
        }
        <ProjectButton />
      </ul>
      <span className={s.logout} onClick={handleLogoutModal}>
        <img src="logout-icon.svg" alt="Logout Icon" width={40} />
      </span>
    </div>
  );
};
