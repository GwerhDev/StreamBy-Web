import { useRouter } from 'next/navigation';
import s from './LogoutModal.module.css';

export const LogoutModal = () => {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem('userToken');
    router.push('/');
  }

  function handleCancelLogout() {
    const logoutModal = document.getElementById('logout-modal') as HTMLDivElement | null;
    if (logoutModal) {
      logoutModal.style.display = 'none';
    }
  }

  return (
    <div className={s.container} id='logout-modal'>
      <form className={s.modalForm} action="">
        <h1>¿Confirma que desea cerrar sesión?</h1>
        <ul>
          <button onClick={handleLogout} type='button'>Confirmar</button>
          <button onClick={handleCancelLogout} type='button'>Cancelar</button>
        </ul>
      </form>
    </div>
  )
}
