import s from './NavMenu.module.css';
import Link from 'next/link';

export const NavMenu = () => {
  return (
    <ul className={s.container}>
      <Link href={"/overview"}>Overview</Link>
      <Link href={"/documentation"}>Docs</Link>
    </ul>
  )
}
