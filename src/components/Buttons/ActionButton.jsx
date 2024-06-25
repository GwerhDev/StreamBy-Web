import s from './ActionButton.module.css';

export const ActionButton = (props) => {
  const { text } = props;

  return (
    <button className={s.container}>
      {text}
    </button>
  )
}
