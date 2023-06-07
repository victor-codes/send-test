import ShipmentTableItem from "@/components/shipmentTableItem";
import {
  filterTypes,
  shipmentTableData,
  shipmentTableHeaders,
} from "@/utils/shipments";
import PlusSvg from "@/public/assets/svgs/sidebar/PlusSvg";
import SearchSvg from "@/public/assets/svgs/sidebar/SearchSvg";
import Layout from "@/components/Layout";
import PlusFilledSvg from "@/public/assets/svgs/PlusFilledSvg";

const Index = () => {
  return (
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
          {filterTypes.map((type, key) => (
            <button key={key} className="dsb-main-ftr-item">
              <PlusFilledSvg /> {type}
            </button>
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
          {shipmentTableData.map((props, key) => (
            <ShipmentTableItem key={key} {...props} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
