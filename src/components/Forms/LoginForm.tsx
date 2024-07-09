"use client"

import { useRouter } from 'next/navigation';
import s from './LoginForm.module.css';
import { FormEvent, useState } from 'react';
import { setUserToken } from '@/helpers/LocalStorage.functions';

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e: any) {
    setEmail(e.target.value);
  }

  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault();
      const formData = { email, password };

      const response = await fetch('/api/controllers/login-inner', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const userToken = await response.json();

      setUserToken(userToken)

      router.push(`/dashboard`);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <ul className={s.container}>
        <li className={s.inputContainer}>
          <label htmlFor="">Email</label>
          <input onInput={handleEmail} type="email" placeholder='example@mail.com' />
        </li>
        <li className={s.inputContainer}>
          <label htmlFor="">Password</label>
          <input onInput={handlePassword} type="password" placeholder='********' />
        </li>
      </ul>
      <button>Log in</button>
    </form>
  );
};
