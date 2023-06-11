import PlusFilledSvg from "@/public/assets/svgs/PlusFilledSvg";
import { FilterProps } from "@/types/shipments";
import { useState } from "react";

const Filter = ({ label, options, updateFilter }: FilterProps) => {
  return (
    <div className="dsb-main-ftr-item">
      <PlusFilledSvg />
      <select name={label} onChange={updateFilter}>
        <option value="">{label}</option>
        {options && options.length > 0 && (
          <>
            {options.map((option: string) => (
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
