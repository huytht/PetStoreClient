import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../components/Accordion/Accordion";
import { ProductList } from "../components/ProductListPage/ProductList";
import { useParams } from "react-router-dom";
import {
  listProduct,
  listProductPage,
} from "./../components/redux/Actions/ProductActions";
import { Pagination } from "@nextui-org/react";
export const ProductPage = () => {
  const { categories } = useSelector((state) => state.categoryList);
  const productList = useSelector((state) => state.productListPage);
  const { name } = useSelector((state) => state.currentNameList);
  const dispatch = useDispatch();

  const { categoryId, breedId } = useParams();
  const [ pageNumber, setPageNumber ] = useState(0);

  useEffect(() => {
    if (breedId) dispatch(listProductPage("hot", breedId, categoryId, pageNumber, 8));
    else if (categoryId) dispatch(listProductPage("hot", 0, categoryId, pageNumber, 8));
    else dispatch(listProductPage("hot", 0, 0, pageNumber, 8));
  }, [dispatch, categoryId, breedId, pageNumber]);

  return (
    <>
     <h1>{!name ? "Tất cả" : name}</h1>

      <div class="product-page mtop">
      
        <div class="product-category">
          <h3 class="title">Danh mục sản phẩm</h3>
          <ul>
            {categories?.map((category) => (
              <Accordion category={category} />
            ))}
          </ul>
        </div>

        <div class="product-list">
          <ProductList productList={productList} name="Test" />
        </div>

      </div>
      <div className="pagination">
        <Pagination shadow animated={false} total={productList.products?.pageInfo?.totalPage} onChange={(e) => setPageNumber(e - 1)} initialPage={1} />
      </div>
    </>
  );
};
