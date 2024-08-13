import s from './AddProjectButton.module.css';

export const AddProjectButton = () => {
  function handleOnClick() {
    console.log("create project");
  }

  return (
    <button onClick={handleOnClick} className={s.container}>
      <img src="add-icon.svg" alt="" width={40} />
    </button>
  )
}