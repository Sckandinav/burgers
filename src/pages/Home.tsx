import React, { useEffect } from 'react';
import Burgers from '../Components/Burgers/Burgers';
import Cart from '../Components/Cart/Cart';
import Skeleton from '../Components/Burgers/Skeleton';
import sortSelector from '../redux/selectors/sort';
import Categories from '../Components/Categories/Categories';
import Sort from '../Components/Sort/Sort';
import Ordering from '../Components/Ordering/Ordering';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import burgersSelector from '../redux/selectors/burgers';
import fetchBurgers from '../redux/api';
import selectorCart from '../redux/selectors/cart';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { burgers, isLoading, isError } = useAppSelector(burgersSelector);
  const { isOrdering } = useAppSelector(selectorCart);
  const params = useAppSelector(sortSelector);

  useEffect(() => {
    dispatch(fetchBurgers(params));
  }, [dispatch, params]);
  return (
    <>
      <div className="container">
        <div className="sortProperty">
          <Categories />
          <Sort />
        </div>
      </div>

      <div className="content">
        <Cart />
        {isLoading && (
          <ul className="burgers">
            {[...new Array(6)].map((_, id) => (
              <Skeleton key={id} />
            ))}
          </ul>
        )}
        {isError && 'Server Error'}
        {burgers && (
          <ul className="burgers">
            {burgers.map(burger => (
              <Burgers key={burger.id} {...burger} />
            ))}
          </ul>
        )}
      </div>
      {isOrdering && <Ordering />}
    </>
  );
};

export default Home;
