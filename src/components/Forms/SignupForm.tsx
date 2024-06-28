"use client"

import { FormEvent } from 'react';
import s from './SignupForm.module.css';

export const SignupForm = () => {
  function handleLogin(e: FormEvent) {
    e.preventDefault();
    console.log('Signup');
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Sign up</h1>
      <ul className={s.container}>
        <li className={s.inputContainer}>
          <label htmlFor="">Username</label>
          <input type="text" placeholder='alias' />
        </li>
        <li className={s.inputContainer}>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='example@mail.com' />
        </li>
        <li className={s.inputContainer}>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='********' />
        </li>
      </ul>
      <button>Sign up</button>
    </form>
  );
};
