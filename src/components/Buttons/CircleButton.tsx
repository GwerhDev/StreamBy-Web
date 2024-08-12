import s from './CircleButton.module.css';

export const CircleButton = (props: any) => {
  const { onClick, img } = props || null;

  return (
    <button onClick={onClick} className={s.container} style={{ backgroundImage: `url(${img})` }}>
    </button>
  )
}
