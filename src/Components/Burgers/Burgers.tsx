import React from 'react';
import { Burger } from '../../redux/types';
import { useAppDispatch } from '../../redux/hooks';
import { addProduct } from '../../redux/slices/cart';

import styles from './Burgers.module.scss';

const Burgers: React.FC<Burger> = burger => {
  const { id, name, image, price } = burger;
  const cartProps = { id, name, image, price, count: 0 };
  const dispatch = useAppDispatch();
  return (
    <li className={styles.burger}>
      <img className={styles.image} src={burger.image} alt="burger" />
      <p className={styles.price}>{burger.price}₽</p>
      <h3 className={styles.title}>{burger.name}</h3>
      <ul className={styles.buttons__list}>
        <li>
          <button>Подробнее</button>
        </li>
        <li>
          <button onClick={() => dispatch(addProduct(cartProps))}>Добавить</button>
        </li>
      </ul>
    </li>
  );
};

export default Burgers;
