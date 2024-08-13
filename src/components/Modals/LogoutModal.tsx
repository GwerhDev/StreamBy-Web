import { useRouter } from 'next/navigation';
import s from './LogoutModal.module.css';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { SecondaryButton } from '../Buttons/SecondaryButton';

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
        <h1>Te esperamos de vuelta</h1>
        <p>¿Confirma que desea cerrar sesión?</p>
        <ul>
          <PrimaryButton action={handleLogout} text='Cerrar sesión' type='button' />
          <SecondaryButton action={handleCancelLogout} text='Cancelar' type='button' />
        </ul>
      </form>
    </div>
  )
}
