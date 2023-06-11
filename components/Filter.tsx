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

const FilterV = ({ label, options, updateFilter }: FilterProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (str: string) => {
    updateFilter(label, str);
    setValue(str);
  };

  return (
    <div className="dsb-main-ftr-item">
      <PlusFilledSvg />
      <div className="dsb-main-ftr-select">
        <p>{value === "" ? label : value}</p>
      </div>
      {options && options.length > 0 && (
        <div className="dsb-main-ftr-select-dpwn">
          <button
            onClick={() => {
              handleChange("");
            }}
          >
            {label}
          </button>
          {options.map((option: string) => (
            <button
              key={option}
              onClick={() => {
                handleChange(option);
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

export default FilterV;
