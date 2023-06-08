import { ShipmentTrackingList } from "@/types/shipmentDetail";
import cx from "classnames";

const ShipmentTrackingItem = ({
  icon,
  title,
  container,
  createdAt,
  location,
  isActive = true,
}: ShipmentTrackingList) => {
  let renderContainer = container && container > 1 ? "containers" : "container";

  return (
    <div
      className={cx("tgim", {
        "tgim--inactive": !isActive,
      })}
    >
      <div className="tgim-icon">
        <div>{icon}</div>
        <div
          className={cx("tgim-icon-line", {
            "tgim-icon-line--36": isActive,
            "tgim-icon-line--62": container,
          })}
        />
      </div>
      <div className="tgim-cnt">
        <h4 className="tgim-cnt-title">{title}</h4>
        {container && (
          <p className="tgim-cnt-count">
            <span>{container}</span> {renderContainer}
          </p>
        )}
        {isActive && (
          <div className="tgim-cnt-ld">
            <p>Date Initiated :</p>

            <p>
              {createdAt} <span /> {location}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShipmentTrackingItem;
