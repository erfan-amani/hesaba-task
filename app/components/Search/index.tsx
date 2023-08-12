import React, { ChangeEvent, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import MobileSearch from "./MobileSearch";
import DesktopSearch from "./DesktopSearch";

const Search = () => {
  const [value, setValue] = useState<string>("");
  const searchTerm = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const resetInput = () => setValue("");

  return (
    <>
      <div className="invisible hidden md:visible md:block">
        <DesktopSearch
          searchTerm={searchTerm}
          value={value}
          handleChange={handleChange}
          resetInput={resetInput}
        />
      </div>
      <div className=" visible block md:invisible md:hidden">
        <MobileSearch
          searchTerm={searchTerm}
          value={value}
          handleChange={handleChange}
          resetInput={resetInput}
        />
      </div>
    </>
  );
};

export default Search;
