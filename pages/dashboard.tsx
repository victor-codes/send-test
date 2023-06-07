import Head from "next/head";
import { shipmentTableData, shipmentTableHeaders } from "@/utils/shipments";
import PlusSvg from "@/public/assets/svgs/sidebar/PlusSvg";
import SearchSvg from "@/public/assets/svgs/sidebar/SearchSvg";
import Layout from "@/components/Layout";
import ShipmentTableItem from "@/components/shipmentTableItem";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="dsb-main">
          <div className="dsb-main-header">
            <h1 className="dsb-main-title">Shipments</h1>
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
          <div className="dsb-main-filter"></div>
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
    </>
  );
}
