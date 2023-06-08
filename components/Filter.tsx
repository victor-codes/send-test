import PlusFilledSvg from "@/public/assets/svgs/PlusFilledSvg";
import { FilterProps } from "@/types/shipments";
import { useState } from "react";

const Filter = ({ label, options, updateFilter }: FilterProps) => {
  const [filterKey, setFilterKey] = useState("");

  return (
    <div className="dsb-main-ftr-item">
      <PlusFilledSvg />
      <select name={label} className="dsb-mainftr-item">
        <option value="">{label}</option>
        {options && (
          <>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default Filter;
