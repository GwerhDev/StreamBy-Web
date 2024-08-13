import s from './SecondaryButton.module.css';

export const SecondaryButton = (props: any) => {
  const { text, action, type } = props;

  function handleClick() {
    action();
  }

  return (
    <button className={s.container} onClick={handleClick} type={type || "button"} >
      {text}
    </button>
  )
}
