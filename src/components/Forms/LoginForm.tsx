"use client"

import s from './LoginForm.module.css';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { setUserToken } from '@/helpers/LocalStorage.functions';

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e: any) {
    setEmail(e.target.value);
    setError('');
  }

  function handlePassword(e: any) {
    setPassword(e.target.value);
    setError('');
  }

  async function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault();

      if (!email || !password) return setError('Please, fill all the fields');

      const formData = { email, password };

      const response = await fetch('/api/controllers/login-inner', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const userToken = await response.json();

      if (!userToken?.error) {
        setUserToken(userToken);
        router.push(`/dashboard`);
        return;
      }

      return setError(userToken?.error);

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
      <span><small>{error}</small></span>
    </form>
  );
};
