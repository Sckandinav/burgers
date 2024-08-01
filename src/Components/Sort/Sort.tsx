import React, { useState } from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { setSortProperties } from '../../redux/slices/sort';
import { sortItem } from '../../redux/types';

const sortOptions: sortItem[] = [
  { label: 'По умолчанию', value: '' },
  { label: 'Цена (по возрастанию)', value: 'price+' },
  { label: 'Цена (по убыванию)', value: 'price-' },
  { label: 'Название (A-Z)', value: 'name+' },
  { label: 'Название (Z-A)', value: 'name-' },
];

const Sort: React.FC = () => {
  const [sortLabel, setSortLabel] = useState('По умолчанию');
  const dispatch = useAppDispatch();

  return (
    <div>
      <label htmlFor="sort">Сортировать по:</label>
      <select
        name="sort"
        id="sort"
        value={sortLabel}
        onChange={event => {
          dispatch(setSortProperties(event.target.value));
          setSortLabel(event.target.value);
        }}
      >
        {sortOptions.map(option => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
