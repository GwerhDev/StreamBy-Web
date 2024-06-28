"use client"

import s from './NavAuth.module.css';
import { useRouter } from 'next/navigation';
import { ActionButton } from './Buttons/ActionButton';
import { PrimaryButton } from './Buttons/PrimaryButton';

export const NavAuth = () => {
  const router = useRouter();

  function redirection(route: string) {
    router.push(route);
  }

  return (
    <span className={s.container}>
      <ActionButton text="Get started" action={() => redirection("/signup")} />
      <PrimaryButton text="Sign in" action={() => redirection("/login")} />
    </span>
  );
};
