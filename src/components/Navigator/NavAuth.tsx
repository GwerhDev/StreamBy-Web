"use client";

import s from './NavAuth.module.css';
import { useRouter } from 'next/navigation';
import { ActionButton } from '@/components/Buttons/ActionButton';
import { PrimaryButton } from '@/components/Buttons/PrimaryButton';

export const NavAuth = () => {
  const router = useRouter();

  function redirection(route: string) {
    router.push(route);
  }

  return (
    <span className={s.container}>
      <ActionButton text="Get started" onClick={() => redirection("/signup")} />
      <PrimaryButton text="Sign in" onClick={() => redirection("/login")} />
    </span>
  )
}
