import ShipmentTableItem from "@/components/ShipmentTableItem";
import {
  filterByList,
  filterTypes,
  shipmentTableData,
  shipmentTableHeaders,
} from "@/utils/shipments";
import PlusSvg from "@/public/assets/svgs/sidebar/PlusSvg";
import SearchSvg from "@/public/assets/svgs/sidebar/SearchSvg";
import Layout from "@/components/Layout";
import Filter from "@/components/Filter";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import ShipmentTableSkeletonLoader from "@/components/ShipmentTableSkeletonLoader";
import { FilterOptions } from "@/types/shipments";

const Index = () => {
  const [filterBy, setFilterBy] = useState<FilterOptions>({
    status: "",
    date: "",
  });

  const handleFilter = (name: string, value: string) => {
    setFilterBy((prev) => ({
      ...prev,
      [name.toLowerCase()]: value.toLowerCase(),
    }));
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const filteredData = shipmentTableData.filter((data) => {
    return Object.keys(filterBy).every(
      (key) =>
        filterBy[key as keyof FilterOptions] === "" ||
        data[key as keyof FilterOptions]
          .toLowerCase()
          .includes(filterBy[key as keyof FilterOptions])
    );
  });

  return (
    <>
      <Head>
        <title>Shipments</title>
      </Head>
      <Layout>
        <div className="dsb-main">
          <div className="dsb-main-header">
            <h2 className="dsb-main-title">Shipments</h2>
            <div className="dsb-main-action">
              <div className="dsb-main-search">
                <input
                  type="search"
                  name="search"
                  placeholder="Search by BL Number"
                  id="search"
                />
                <SearchSvg />
              </div>
              <button className="dsb-main-btn">
                Create New <PlusSvg />
              </button>
            </div>
          </div>
          <div className="dsb-main-ftr">
            {filterByList.map((props, index: number) => (
              <Filter key={index} updateFilter={handleFilter} {...props} />
            ))}
            {filterTypes.map((type, index: number) => (
              <Filter key={index} label={type} />
            ))}
          </div>
          <div>
            <div className="sli-table">
              {shipmentTableHeaders.map((header: string, index: number) => (
                <p key={index} className="sli-table-item">
                  {header}
                </p>
              ))}
            </div>

            {isLoading ? (
              <>
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <ShipmentTableSkeletonLoader key={index} />
                  ))}
              </>
            ) : filteredData.length === 0 ? (
              <div className="sli-nf">
                <p> No shipments found</p>
              </div>
            ) : (
              filteredData.map((props, index: number) => (
                <ShipmentTableItem key={index} {...props} />
              ))
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
