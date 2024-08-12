import s from './LateralMenu.module.css';

export const LateralMenu = () => {
  const projectName = "Project's name";

  return (
    <div className={s.container}>
      <h2>{projectName}</h2>
      <div>
        <h6>MAIN MENU</h6>
        <h4>DASHBOARD</h4>
      </div>
        <ul className={s.menuList}>
          <li>
            Overview
          </li>
        </ul>
      <h4>STORAGE</h4>
      <ul className={s.menuList}>
        <li>
          Image
        </li>
        <li>
          Audio
        </li>
        <li>
          Video
        </li>
        <li>
          3D Models
        </li>
      </ul>
      <h4>SETTINGS</h4>
      <ul className={s.menuList}>
        <li>
          Credentials
        </li>
        <li>
          Permissions
        </li>
      </ul>
    </div>
  )
}
