import ShipmentTableItem from "@/components/ShipmentTableItem";
import {
  filterBy,
  filterTypes,
  shipmentTableData,
  shipmentTableHeaders,
} from "@/utils/shipments";
import PlusSvg from "@/public/assets/svgs/sidebar/PlusSvg";
import SearchSvg from "@/public/assets/svgs/sidebar/SearchSvg";
import Layout from "@/components/Layout";
import Filter from "@/components/Filter";
import { useEffect, useState } from "react";
import Head from "next/head";
import ShipmentTableSkeletonLoader from "@/components/ShipmentTableSkeletonLoader";

const Index = () => {
  const [filterBy, setFilterBy] = useState({
    status: "current",
    date: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const filteredData = shipmentTableData.filter((data) => {
    for (const key in filterBy) {
      if (filterBy[key] !== "" && data[key] !== filterBy[key]) {
        return true;
      }

      return true;
    }
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
            {/* {filterBy.map((props, index: number) => (
              <Filter key={index} {...props} />
            ))} */}
            {filterTypes.map((type, index: number) => (
              <Filter key={index} label={type} />
            ))}
          </div>
          <div>
            <div className="sli-table">
              {shipmentTableHeaders.map((header: string) => (
                <p key={header} className="sli-table-item">
                  {header}
                </p>
              ))}
            </div>

            {isLoading ? (
              <>
                {Array(5)
                  .fill(null)
                  .map((_, index) => {
                    <ShipmentTableSkeletonLoader key={index} />;
                  })}
              </>
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
