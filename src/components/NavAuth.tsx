import s from './NavAuth.module.css';
import { ActionButton } from './Buttons/ActionButton';
import { PrimaryButton } from './Buttons/PrimaryButton';

export const NavAuth = () => {
  return (
    <span className={s.container}>
      <ActionButton text="Get started" />
      <PrimaryButton text="Sign in" />
    </span>
  )
}
