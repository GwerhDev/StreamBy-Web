import s from './ActionButton.module.css';

export const ActionButton = (props: any) => {
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
