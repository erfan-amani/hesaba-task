import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../types/Product";
import { getAllProducts } from "../../../utils/data";

const List = ({ searchTerm }: { searchTerm: string }) => {
  const [searchResult, setSearchResult] = useState<Product[]>([]);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResult([]);
    } else {
      const result = getAllProducts(searchTerm);
      setSearchResult(result);
    }
  }, [searchTerm]);

  return (
    <div className="max-h-[400px] overflow-auto text-left">
      <div className="flex flex-col gap-2">
        {searchResult.map(({ name, image, id }) => (
          <Link to={`/products/${id}`}>
            <div className="flex flex-row-reverse items-center gap-2">
              <div className="w-12 h-12">
                <img src={image} className="w-full h-full object-contain" />
              </div>
              <h2 className="!font-mono text-sm">{name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
