import React, { useState } from "react";

const Image = ({
  src,
  loaderClassName,
  imageClassName,
}: {
  src: string;
  loaderClassName?: string;
  imageClassName?: string;
}) => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <>
      <img
        src={src}
        className={`w-full ${imageClassName}`}
        onLoad={() => setIsLoad(true)}
      />

      {!isLoad && (
        <div
          className={`w-full animate-pulse bg-gray-100 ${loaderClassName}`}
        />
      )}
    </>
  );
};

export default Image;
