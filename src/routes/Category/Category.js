import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { selectCategories } from "../../store/category/categorySelector";
import { CategoryContainer, CategoryTitle } from "./CategoryStyle";

function Category() {
  const [products, setProducts] = useState([]);
  const categoriesMap = useSelector(selectCategories);
  const { category } = useParams();

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </Fragment>
  );
}

export default Category;
