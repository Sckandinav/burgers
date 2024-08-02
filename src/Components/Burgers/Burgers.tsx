import React from 'react';
import { Burger } from '../../redux/types';

import styles from './Burgers.module.scss';

const Burgers: React.FC<Burger> = burger => {
  return (
    <li className={styles.burger}>
      <img className={styles.image} src={burger.image} alt="burger" />
      <p className={styles.price}>{burger.price}</p>
      <h3 className={styles.title}>{burger.name}</h3>
      <ul className={styles.buttons__list}>
        <li>
          <button>Подробнее</button>
        </li>
        <li>
          <button>Добавить</button>
        </li>
      </ul>
    </li>
  );
};

export default Burgers;
