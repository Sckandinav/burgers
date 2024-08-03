import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#/">
        <img src="./logo.svg" alt="logo" />
      </a>
      <div className={styles.content}>
        <img src="./burger.svg" alt="Burger" />
        <div>
          <h1>
            <span>Только самые </span>сочные бургеры!
          </h1>
          <p>Бесплатная доставка от 599₽</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
