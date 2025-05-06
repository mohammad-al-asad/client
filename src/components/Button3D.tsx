import React, { ReactNode } from "react";

const Button = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <button
        className={` ${className} bg-gradient-to-r text-white from-[#E855DE] via-[#E855DE] to-[#5400EE] px-3 lg:px-5 flex justify-center items-center text-xs lg:text-sm py-1 rounded-full cursor-pointer`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
