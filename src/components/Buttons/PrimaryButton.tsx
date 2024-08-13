import s from './PrimaryButton.module.css';

export const PrimaryButton = (props: any) => {
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
