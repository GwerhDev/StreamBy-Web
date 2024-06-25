import s from './PrimaryButton.module.css';

export const PrimaryButton = (props) => {
  const { text } = props;

  return (
    <button className={s.container}>
      {text}
    </button>
  )
}
