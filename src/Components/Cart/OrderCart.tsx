import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import selectCart from '../../redux/selectors/cart';

const OrderCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice, totalCount } = useAppSelector(selectCart);

  return <div>OrderCart</div>;
};

export default OrderCart;
