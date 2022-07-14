import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

import { CategoriesContext } from "../../context/categoriesContext";

import "./CategoriesPreview.scss";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
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