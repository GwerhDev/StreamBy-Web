import s from './PrimaryButton.module.css';

export const PrimaryButton = (props: any) => {
  const { text, action } = props;

  function handleClick() {
    action();
  }

  return (
    <button className={s.container} onClick={handleClick}>
      {text}
    </button>
  )
}
