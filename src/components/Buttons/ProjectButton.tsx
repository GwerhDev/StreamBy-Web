import s from './ProjectButton.module.css';

export const ProjectButton = (props: any) => {
  const { action, project } = props || null;

  function handleOnClick() {
    action(project);
  }

  return (
    <button onClick={handleOnClick} className={s.container} style={{ backgroundImage: `url(${project?.img})` }}>
    </button>
  )
}
