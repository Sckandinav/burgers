import React from 'react';

import styles from './Cart.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import selectCart from '../../redux/selectors/cart';
import { addProduct, minusProduct, clearCart, orderPopup } from '../../redux/slices/cart';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice, totalCount } = useAppSelector(selectCart);
  if (items) {
  }

  return (
    <div className={styles.cart}>
      <div className={styles.top}>
        <p>Корзина</p>
        <span>{totalCount}</span>
      </div>
      <ul>
        {items.map(product => (
          <li className={styles.item} key={product.id}>
            <img className={styles.img} src={product.image} alt="burger" />
            <div className={styles.info}>
              <h5>{product.name}</h5>
              <p>{product.price}</p>
            </div>

            <div className={styles.count}>
              <button className={styles.minus} onClick={() => dispatch(minusProduct(product))}>
                -
              </button>
              <span className={styles.quantity}>{product.count}</span>
              <button className={styles.plus} onClick={() => dispatch(addProduct(product))}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <div>
          <div className={styles.total}>
            <p>Всего:</p> <span>{totalPrice}₽</span>
          </div>
          <div className={styles['buttons__list']}>
            <button onClick={() => dispatch(clearCart())}>Очистить</button>
            <button onClick={() => dispatch(orderPopup())}>Оформить заказ</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
