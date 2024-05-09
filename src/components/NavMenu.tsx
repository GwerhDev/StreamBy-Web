import s from '@/components/NavMenu.module.css';

export const NavMenu = () => {
  return (
    <ul className={s.container}>
      <li>Overview</li>
      <li>Docs</li>
      <li>Pricing</li>
    </ul>
  )
}
