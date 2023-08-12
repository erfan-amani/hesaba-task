import DocumentMagnifyingGlassIcon from "@heroicons/react/24/outline/DocumentMagnifyingGlassIcon";
import React from "react";
import { Link } from "react-router-dom";
import List from "./SearchList";

const SearchBody = ({
  searchTerm,
  value,
  handleClose,
}: {
  searchTerm: string;
  value: string;
  handleClose: () => void;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 text-gray-400 text-sm border-b pb-4">
          <DocumentMagnifyingGlassIcon className="w-5 h-5" />

          <Link to={`/products?search=${value}`} onClick={handleClose}>
            <div className="flex gap-2">
              <p>جستجو برای...</p>
              {value && <p>{value}</p>}
            </div>
          </Link>
        </div>

        <div>
          <List searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default SearchBody;
