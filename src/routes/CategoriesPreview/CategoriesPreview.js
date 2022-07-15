import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { selectCategories } from "../../store/category/categorySelector";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategories);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
}
