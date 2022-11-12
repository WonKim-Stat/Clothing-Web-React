import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { getCategoriesAndDocuments } from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/utilities/firebase/firebase.utility";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";
import { CATEGORY_ACTION_TYPES } from "./category.types";

//3
export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

//2
export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

//1
export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
