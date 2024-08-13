import { ActionButton } from '../Buttons/ActionButton';
import s from './EmptyBrowser.module.css';

export const EmptyBrowser = () => {
  const handleCreateProject = () => {
    console.log('Create project');
  }

  return (
    <div className={s.container}>
      <h1>Born to Dev</h1>
      <p>Get started by creating a new project</p>
      <ActionButton text='Create project' action={handleCreateProject} />
    </div>
  )
}
