import PlusFilledSvg from "@/public/assets/svgs/PlusFilledSvg";
import { FilterProps } from "@/types/shipments";
import { useState } from "react";

const Filter = ({ label, options, updateFilter }: FilterProps) => {
  const [filterKey, setFilterKey] = useState("");

  return (
    <div className="dsb-main-ftr-item">
      <PlusFilledSvg /> {label}
      {options && (
        <div className="dsb-main-ftr-item-options">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                // updateFilter(label, option);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
