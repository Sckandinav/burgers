import React, { useEffect } from 'react';

import fetchBurgers from './redux/api';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import burgersSelector from './redux/selectors/burgers';

import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const { burgers, isLoading, isError } = useAppSelector(burgersSelector);

  useEffect(() => {
    dispatch(fetchBurgers());
  }, []);

  return (
    <div>
      {isLoading && 'Loading'}
      {isError && 'Server Error'}
      {burgers && (
        <ul>
          {burgers.map(el => (
            <h3 key={el.id}>{el.name}</h3>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
