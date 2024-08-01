import { sortProp } from '../redux/types';

export const sortParser = (property: string) => {
  const result: sortProp = {
    sortBy: '',
    orderBy: '',
  };
  if (!property) {
    return result;
  }

  result.orderBy = property.slice(-1) === '-' ? 'desc' : 'asc';
  result.sortBy = property.slice(0, -1);

  return result;
};
