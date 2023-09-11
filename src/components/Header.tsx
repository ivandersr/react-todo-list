import headerLogo from '../assets/Logo.svg';

import styles from './Header.module.css';


export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={headerLogo} alt="" />
    </header>
  )
}