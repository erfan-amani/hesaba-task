import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { Product } from "../../../types/Product";
import { getAllProducts } from "../../../utils/data";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [allData, setAllData] = useState<Product[]>([]);
  const [visibleData, setVisibleData] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const selcetedOrder = searchParams.get("order") || "";

  const fetchMoreData = () => {
    if (visibleData.length === allData.length) {
      return;
    }

    const lastVisibleIndex = visibleData.length - 1;
    setVisibleData(allData.slice(0, lastVisibleIndex + 20));
  };

  useEffect(() => {
    const data = getAllProducts(searchTerm, selcetedOrder);

    setAllData(data);
    setVisibleData(data.slice(0, 20));
  }, [searchTerm, selcetedOrder]);

  return (
    <InfiniteScroll
      className="grid grid-cols-4 gap-4"
      dataLength={visibleData.length}
      next={fetchMoreData}
      hasMore={visibleData.length !== allData.length}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {visibleData.map((product) => (
        <SingleProduct key={product.id} data={product} />
      ))}
    </InfiniteScroll>
  );
};

export default Products;
