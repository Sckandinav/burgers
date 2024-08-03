import { cartItem } from '../redux/types';

export const calcTotalCount = (item: cartItem[]) => item.reduce((acc, current) => (acc += current.count), 0);
export const calcTotalPrice = (items: cartItem[]) => items.reduce((acc, curr) => (acc += curr.price * curr.count), 0);
