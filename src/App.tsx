import React, { useEffect } from 'react';

import fetchBurgers from './redux/api';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import burgersSelector from './redux/selectors/burgers';
import sortSelector from './redux/selectors/sort';

import Categories from './Components/Categories/Categories';
import Sort from './Components/Sort/Sort';
import Burgers from './Components/Burgers/Burgers';
import Cart from './Components/Cart/Cart';

import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const { burgers, isLoading, isError } = useAppSelector(burgersSelector);
  const params = useAppSelector(sortSelector);

  useEffect(() => {
    dispatch(fetchBurgers(params));
  }, [dispatch, params]);

  return (
    <main>
      <div>
        <div className="container">
          <div className="sortProperty">
            <Categories />
            <Sort />
          </div>
        </div>
        <div className="container">
          <div className="content">
            <Cart />
            {isLoading && 'Loading'}
            {isError && 'Server Error'}
            {burgers && (
              <ul className="burgers">
                {burgers.map(burger => (
                  <Burgers key={burger.id} {...burger} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
