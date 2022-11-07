export enum CATEGORY_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
}
export type CategoriesState = {
  categories: Category[];
  isLoading: boolean;
  error: Error | null;
};

export type Categorymap = {
  [key: string]: CategoryItem[];
};

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};
export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};
