import s from './page.module.css';
import { Partners } from '@/components/Sections/Partners';
import { Features } from '@/components/Sections/Features';
import { Presentation } from '@/components/Sections/Presentation';
import { Documentation } from '@/components/Sections/Documentation';

import { UnderConstruction } from '@/components/UnderConstruction';
import { Testimonials } from '@/components/Sections/Testimonials';
import { Footer } from '@/components/Sections/Footer';

export default function Home() {
  return (
    <main className={s.main}>
      <Presentation />
      <Partners />
      <Features />
      <Documentation />
      <Testimonials />
      <Footer />
      <UnderConstruction />
    </main>
  )
}