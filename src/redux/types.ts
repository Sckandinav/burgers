export type Burger = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  structure: string[];
};

export interface BurgerSliceState {
  burgers: Burger[];
  isLoading: boolean;
  isError: boolean;
}

export type categories = {
  category: string[];
};

export type sortItem = {
  label: string;
  value: string;
};
export type sortProp = {
  sortBy: string;
  orderBy: string;
};

export interface SortSliceState {
  categories: string;
  sortBy: string;
  orderBy: string;
}
