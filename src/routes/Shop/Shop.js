import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductsContext } from "../../context/productContext";

import "./Shop.scss";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
