import s from './SecondaryButton.module.css';

export const SecondaryButton = (props) => {
  const { text } = props;

  return (
    <button className={s.container}>
      {text}
    </button>
  )
}
