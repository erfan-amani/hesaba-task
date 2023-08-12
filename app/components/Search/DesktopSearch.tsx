import React, { ChangeEvent, useState } from "react";
import SearchBody from "./components/SearchBody";
import SearchInput from "./components/SearchInput";

const DesktopSearch = ({
  searchTerm,
  value,
  handleChange,
  resetInput,
}: {
  searchTerm: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  resetInput: () => void;
}) => {
  const [open, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div className={`transition-all relative ${open ? "z-[1001]" : ""}`}>
        <div className="relative">
          <div onClick={handleOpen}>
            <SearchInput
              value={value}
              handleChange={handleChange}
              resetInput={resetInput}
            />
          </div>

          {open && (
            <div className="absolute mt-2 bg-white shadow-md p-4 rounded-xl w-full">
              <SearchBody
                searchTerm={searchTerm}
                value={value}
                handleClose={handleClose}
              />
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

export default DesktopSearch;
