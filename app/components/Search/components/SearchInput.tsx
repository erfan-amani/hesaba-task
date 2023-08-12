import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import React, { ChangeEvent } from "react";

const SearchInput = ({
  value,
  handleChange,
  resetInput,
}: {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  resetInput: () => void;
}) => {
  return (
    <div className="flex items-center gap-4 w-full md:w-72 lg:w-[500px] xl:w-[700px] py-3 px-3 bg-gray-100 rounded-xl">
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
  );
};

export default SearchInput;
