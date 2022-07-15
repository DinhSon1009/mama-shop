import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getCategoriesAndDocuments } from "../../utils/firsebase/firebase.utils";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
import { setCategoriesArray } from "../../store/category/categoryAction";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesArray(categoriesArray));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
