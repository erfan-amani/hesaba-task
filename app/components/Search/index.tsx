import React, { ChangeEvent, useState } from "react";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import DocumentMagnifyingGlassIcon from "@heroicons/react/24/outline/DocumentMagnifyingGlassIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { useDebounce } from "../../hooks/useDebounce";
import List from "./List";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [open, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const searchTerm = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const resetInput = () => setValue("");
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div className={`transition-all relative ${open ? "z-[1001]" : ""}`}>
        <div className="relative">
          <div onClick={handleOpen}>
            <div className="flex items-center gap-4 w-72 lg:w-[500px] xl:w-[700px] py-3 px-3 bg-gray-100 rounded-xl">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />

              <input
                className="bg-transparent flex-1 placeholder:text-xs focus-visible:outline-none"
                placeholder="محصول مورد نظرتان را جستجو کنید"
                type="text"
                value={value}
                onChange={handleChange}
              />

              {value && (
                <button onClick={resetInput}>
                  <XCircleIcon className="w-6 h-6 text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {open && (
            <div className="absolute mt-2 bg-white shadow-md p-4 rounded-xl w-full">
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

              {/* Backdrop */}
            </div>
          )}
        </div>
      </div>

      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-[1000] h-screen w-screen bg-black transition-all visible bg-opacity-30 opacity-   100"
        />
      )}
    </div>
  );
};

export default SearchInput;
