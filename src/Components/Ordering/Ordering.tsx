import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import selectorCart from '../../redux/selectors/cart';
import { orderPopup } from '../../redux/slices/cart';

import styles from './Ordering.module.scss';

const Ordering: React.FC = () => {
  const { isOrdering } = useAppSelector(selectorCart);
  const dispatch = useAppDispatch();
  return (
    <div className={`${styles.modal} ${isOrdering ? styles.visible : ''}`} onClick={() => dispatch(orderPopup())}>
      <div className={styles.inner} onClick={e => e.stopPropagation()}>
        <h4>Доставка</h4>
        <form>
          <div className={styles.input__group}>
            <input type="text" id="name" placeholder=" " />
            <label htmlFor="name">Ваше имя</label>
            <p>err</p>
          </div>
          <div className={styles.input__group}>
            <input type="tel" id="phone" placeholder=" " />
            <label htmlFor="phone">Телефон</label>
            <p>err</p>
          </div>

          <div className={styles.input__group}>
            <input type="text" id="address" placeholder=" " />
            <label htmlFor="address">Улица, дом, квартира</label>
            <p>err</p>
          </div>
          <div className={styles['address__details']}>
            <div className={styles.input__group}>
              <input type="text" id="floor" placeholder=" " />
              <label htmlFor="floor">Этаж</label>
              <p>err</p>
            </div>
            <div className={styles.input__group}>
              <input type="text" id="intercom" placeholder=" " />
              <label htmlFor="intercom">Домофон</label>
              <p>err</p>
            </div>
          </div>
          <button>Оформить</button>
        </form>
      </div>
    </div>
  );
};

export default Ordering;
