// import data from "/Users/wonseokkim/complete-react/clothing-shop/src/shop-data.json";

import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context";

import ProductCard from "../../product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { currentProduct } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {currentProduct.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
