import { Link } from "react-router-dom";

import ProductCard from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/product-card/product-card.component.jsx";

// import "./category-preview.styles.jsx";
import {
  Preview,
  Title,
  CategoryPreviewContainer,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title to={title}>{title.toUpperCase()}</Title>
      <Preview>
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
