import { ShipmentListMockDataType } from "@/types/shipments";
import cx from "classnames";
import Link from "next/link";

const ShipmentTableItem = ({
  bl_number,
  title,
  origin,
  date,
  destination,
  eta,
  status,
  volume,
  carrier,
  tags,
  icon,
}: ShipmentListMockDataType) => {
  return (
    <Link href={`/shipments/${bl_number}`} className="sli">
      <div className="sli-header">
        <div className="sli-header-icon">{icon}</div>

        <div className="sli-header-content">
          <div>
            <h3 className="sli-header-title">{bl_number}</h3>
            <span>&#x2022;</span>
            <p className="sli-header-desc">{title}</p>
          </div>
          <div className="sli-tag-container">
            {tags.map((tag: string, key: number) => (
              <div key={key} className="sli-tag">
                <div>
                  <p>{tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sli-origin">
        <div className="sli-origin-adr">{origin}</div>
        <div className="sli-origin-date">Created: {date}</div>
      </div>

      <div className="sli-origin">
        <div className="sli-origin-adr">{destination}</div>
        <div className="sli-origin-date">ETA: {eta}</div>
      </div>

      <div
        className={cx(
          "sli-status",
          `sli-status--${status.toLocaleLowerCase()}`
        )}
      >
        <div>
          <span />
          <p>{status}</p>
        </div>
      </div>

      <div className="sli-volume">
        <p>{volume}</p>
      </div>
      <div className="sli-volume">
        <p>{carrier}</p>
      </div>
    </Link>
  );
};

export default ShipmentTableItem;
