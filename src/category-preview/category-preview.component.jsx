import { Link } from "react-router-dom";

import ProductCard from "/Users/wonseokkim/complete-react/startover1/Clothing-Web-React/src/components/product-card/product-card.component.jsx";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <Link className="title" to={title}>
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {products &&
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
