import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/categories-preview/categories-preview.component.jsx";
import Category from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/routes/category/category.component.jsx";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
