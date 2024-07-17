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
