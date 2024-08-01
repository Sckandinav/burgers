import { RootState } from '../store';

const categoriesSelector = (state: RootState) => state.categories.category;

export default categoriesSelector;
