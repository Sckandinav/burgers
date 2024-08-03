import React, { useEffect } from 'react';

import categoriesSelector from '../../redux/selectors/categories';
import burgersSelector from '../../redux/selectors/burgers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCategory } from '../../redux/slices/categories';
import { setCategory } from '../../redux/slices/sort';

import styles from './Categories.module.scss';

const Categories: React.FC = () => {
  const { burgers } = useAppSelector(burgersSelector);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(categoriesSelector);

  useEffect(() => {
    dispatch(getCategory(burgers));
  }, [burgers, dispatch]);

  return (
    <ul className={styles.categories}>
      {categories.map(category => (
        <li
          className={styles.category}
          key={category}
          onClick={event => {
            if (event.currentTarget.textContent) {
              dispatch(setCategory(event.currentTarget.textContent));
            }
          }}
        >
          {' '}
          {category[0].toUpperCase() + category.slice(1)}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
