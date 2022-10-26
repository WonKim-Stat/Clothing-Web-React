import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../../utilities/firebase/firebase.utility";
import { setCategories } from "../../../store/categories/category.action";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/categories-preview/categories-preview.component.jsx";
import Category from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/routes/category/category.component.jsx";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      // const categoryMap = await getCategoriesAndDocuments("categories");
      const categoriesArray = await getCategoriesAndDocuments("categories");
      // console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
