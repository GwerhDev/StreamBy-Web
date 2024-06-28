import s from '@/components/NavMenu.module.css';
import Link from 'next/link';

export const NavMenu = () => {
  return (
    <ul className={s.container}>
      <Link href={"/"}>Overview</Link>
      <Link href={"/documentation"}>Docs</Link>
      <Link href={"/pricing"}>Pricing</Link>
    </ul>
  );
};
