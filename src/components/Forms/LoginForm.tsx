"use client"

import s from './LoginForm.module.css';
import { FormEvent } from 'react';

export const LoginForm = () => {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('Login');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <ul className={s.container}>
        <li className={s.inputContainer}>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='example@mail.com' />
        </li>
        <li className={s.inputContainer}>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='********' />
        </li>
      </ul>
      <button>Log in</button>
    </form>
  );
};
