import s from './LateralTab.module.css';
import { CircleButton } from '../Buttons/CircleButton';

export const LateralTab = () => {
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
        <CircleButton />
      </ul>
      <span className={s.logout} onClick={handleLogoutModal}>
        <img src="logout-icon.svg" alt="Logout Icon" width={40} />
      </span>
    </div>
  );
};
