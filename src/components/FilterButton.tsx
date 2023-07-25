import clsx from "clsx";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

interface FilterButtonProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const FilterButton = ({ text, active = false, onClick }: FilterButtonProps) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <button
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={clsx(
        "flex items-center px-4 py-2 font-bold  capitalize rounded ",
        {
          "bg-brand-yellow-1 text-white hover:bg-brand-yellow-2 hover:text-gray-800":
            active,
          "bg-white text-gray-700 hover:bg-gray-100 hover:text-black": !active,
        }
      )}
      onClick={onClick}
    >
      {text}
      {active && (
        <MdCancel
          className={clsx("ml-2", {
            "text-black": hover,
            "text-white": !hover,
          })}
          size={16}
        />
      )}
    </button>
  );
};

export default FilterButton;
