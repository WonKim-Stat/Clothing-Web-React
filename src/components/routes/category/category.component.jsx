import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/product-card/product-card.component.jsx";

import { CategoriesContext } from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/contexts/categories.context.jsx";

// import "./cagetory.styles.jsx";
import { CategoryContainer, CategoryTitle } from "./cagetory.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoriesContext>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoriesContext>
    </Fragment>
  );
};

export default Category;
