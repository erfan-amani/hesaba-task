import React, { ChangeEvent, useState } from "react";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import SearchInput from "./components/SearchInput";
import SearchBody from "./components/SearchBody";

const MobileSearch = ({
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
    <>
      <div className={`transition-all ${open ? "z-[1001]" : ""}`}>
        <div className="">
          <button
            onClick={handleOpen}
            className="border px-2 h-full rounded-md py-2"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>

          {open && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-[98vw] md:w-[60vw] max-w-[400px] bg-white rounded-lg">
              <div className="p-4">
                <div className="flex flex-col gap-4">
                  <SearchInput
                    value={value}
                    handleChange={handleChange}
                    resetInput={resetInput}
                  />
                  <SearchBody
                    searchTerm={searchTerm}
                    value={value}
                    handleClose={handleClose}
                  />
                </div>
              </div>
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
    </>
  );
};

export default MobileSearch;
