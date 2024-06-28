import s from './SecondaryButton.module.css';

export const SecondaryButton = (props: any) => {
  const { text, action } = props;

  function handleClick() {
    action();
  }

  return (
    <button className={s.container} onClick={handleClick}>
      {text}
    </button>
  );
};
