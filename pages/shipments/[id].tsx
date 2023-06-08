import Layout from "@/components/Layout";
import ShipmentTrackingItem from "@/components/ShipmentTrackingItem";
import ChervonLeftSvg from "@/public/assets/svgs/ChervonLeftSvg";
import { CustomBgSvg } from "@/public/assets/svgs/CustomBgSvg";
import { DateSvg } from "@/public/assets/svgs/DateSvg";
import PlusSvg from "@/public/assets/svgs/sidebar/PlusSvg";
import {
  ShipmentDetailInfoDetailsList,
  ShipmentDetailsInfoHeader,
  ShipmentDetailsTabHeader,
} from "@/types/shipmentDetail";
import {
  shipmentDetailImportDetails,
  shipmentDetailInfoDetails,
  shipmentDetailInfoHeaders,
  shipmentDetailServiceType,
  shipmentDetailTabHeaders,
  shipmentTrackingList,
} from "@/utils/shipmentDetail";

import cx from "classnames";
import Link from "next/link";

const Index = () => {
  return (
    <Layout isSidebarMin={true}>
      <div className={cx("dsb-main", "sd")}>
        <div className="sd-main">
          <div className="sd-main-header">
            <Link href="/shipments" className="sd-back">
              <ChervonLeftSvg />
              Go back
            </Link>
            <div className="sd-main-header-title">
              <h2 className="dsb-main-title">Shipment SN-UCU26AAC</h2>
              <div className={cx("sli-status", `sli-status--completed`)}>
                <div>
                  <span />
                  <p>Active</p>
                </div>
              </div>
            </div>
            <div className="sd-tab-container">
              {shipmentDetailTabHeaders.map(
                ({ label, count }: ShipmentDetailsTabHeader, index) => (
                  <button
                    key={index}
                    className={cx("sd-tab", {
                      "sd-tab--active": index === 0,
                    })}
                  >
                    <p>{label}</p>
                    <span>{count}</span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* table 1 */}

          <section className="sd-main-info">
            <div className="sd-main-info-header">
              {shipmentDetailInfoHeaders.map(
                ({ label, tip, details }: ShipmentDetailsInfoHeader, index) => (
                  <div key={index} className="sd-main-info-item">
                    <p className="sd-main-info-item-title">
                      {label}
                      <span>{tip}</span>
                    </p>
                    <p className="sd-main-info-item-dtl">{details}</p>
                  </div>
                )
              )}
            </div>
            <div className="sd-main-info-tag-container">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="sd-main-info-tag">
                    PO #1234
                  </div>
                ))}
            </div>

            <div className="sd-main-info-dtl">
              <div>
                <button>
                  <PlusSvg />
                  Edit
                </button>
              </div>
              <div>
                {shipmentDetailInfoDetails.map(({ label, desc }, index) => (
                  <div className="sd-main-info-dtl-item" key={index}>
                    <p>{label}</p>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="sd-main-imp">
              <div className="sd-main-imp-action">
                <div>
                  <button>Import Customs</button>
                </div>
              </div>
              <div className="sd-main-imp-header">
                <p className="sd-main-imp-header-label">Duty Amount</p>
                <p className="sd-main-imp-header-desc">USD 10,000</p>
              </div>
              <div className="sd-main-imp-grid">
                {shipmentDetailImportDetails.map(
                  (
                    { label, desc }: ShipmentDetailInfoDetailsList,
                    index: number
                  ) => (
                    <div className="sd-main-info-dtl-item" key={index}>
                      <p>{label}</p>

                      <p>{desc}</p>
                    </div>
                  )
                )}
              </div>
              <CustomBgSvg />
            </div>
          </section>

          <section>
            <div className="sd-main-srt">
              <div className="sd-main-srt-action">
                <button>
                  <PlusSvg />
                  Edit
                </button>
              </div>
              <div className="sd-main-srt-header">
                <p className="sd-main-srt-header-title">Service type</p>
              </div>
              <div className="sd-main-srt-grid">
                {shipmentDetailServiceType.map(
                  (
                    { label, desc, icon }: ShipmentDetailInfoDetailsList,
                    index: number
                  ) => (
                    <div className="sd-main-info-dtl-item" key={index}>
                      <p>{label}</p>
                      <div>
                        {icon}
                        <p>{desc}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="sd-main-srt-clr-container">
                {Array(2)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="sd-main-srt-clr">
                      Import Clearance
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>

        <div className="sd-aside">
          <div className="sd-aside-header">
            <div className="sd-aside-header-float">
              <button>Forwarder</button>
            </div>

            <CustomBgSvg />
            <div className="sd-aside-header-title">
              <h3>Emeka & Sons Limited</h3>
              <p>View Performance</p>
            </div>
            <div className="sd-aside-header-details">
              <p>
                <DateSvg />
                Assigned:
              </p>
              <p> 24 June, 2023</p>
            </div>
          </div>

          <div className="sd-aside-content">
            {shipmentTrackingList.map((props, index) => (
              <ShipmentTrackingItem key={index} {...props} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
