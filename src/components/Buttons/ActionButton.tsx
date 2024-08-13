import s from './ActionButton.module.css';

export const ActionButton = (props: any) => {
  const { text, action, img } = props;

  function handleClick() {
    action();
  }

  return (
    <button className={s.container} onClick={handleClick} style={{ backgroundImage: `url(${img})` }}>
      {text}
    </button>
  )
}
