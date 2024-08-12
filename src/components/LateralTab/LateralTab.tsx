import s from './LateralTab.module.css';
import { CircleButton } from '../Buttons/CircleButton';

export const LateralTab = () => {
  return (
    <div className={s.container}>
      <img src="streamby-icon.svg" alt="" height={25} />
      <ul>
        <CircleButton />
      </ul>

    </div>
  )
}
