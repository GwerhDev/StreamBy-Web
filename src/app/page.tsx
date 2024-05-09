import { ImageVisor } from '@/components/ImageVisor';
import s from './page.module.css';

export default function Home() {
  return (
    <main className={s.main}>
      <div className={s.titleContainer}>
        <span className={s.logo}>
          <img src="streamby-logo.svg" alt="logo" width={"200px"} />
        </span>
      </div>
      <ImageVisor />
      <i><span className="info-icon">i</span>
        <p>Plataforma de almacenamiento de <a href="https://gwerh.netlify.app" target="_blank">Gwerh</a></p>
      </i>
    </main>
  )
}
