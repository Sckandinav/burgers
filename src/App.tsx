import React, { useEffect } from 'react';

import fetchBurgers from './redux/api';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import burgersSelector from './redux/selectors/burgers';
import sortSelector from './redux/selectors/sort';

import Categories from './Components/Categories/Categories';
import Sort from './Components/Sort/Sort';
import Burgers from './Components/Burgers/Burgers';

import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const { burgers, isLoading, isError } = useAppSelector(burgersSelector);
  const params = useAppSelector(sortSelector);

  useEffect(() => {
    dispatch(fetchBurgers(params));
  }, [dispatch, params]);

  return (
    <div>
      <div>
        <Categories />
        <Sort />
      </div>
      <div className="container">
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
  );
}

export default App;
