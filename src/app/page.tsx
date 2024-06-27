import s from './page.module.css';
import { Partners } from '@/components/Partners';
import { Features } from '@/components/Features';
import { Presentation } from '@/components/Presentation';
import { UnderConstruction } from '@/components/UnderConstruction';

export default function Home() {
  return (
    <main className={s.main}>
      <Presentation />
      <Partners />
      <Features />
      <UnderConstruction />
    </main>
  )
}