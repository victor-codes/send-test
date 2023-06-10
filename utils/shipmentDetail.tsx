import ShippingModeSvg from "@/public/assets/svgs/ShippingModeSvg";
import CustomSvg from "@/public/assets/svgs/tracking/CustomSvg";
import LocationSvg from "@/public/assets/svgs/tracking/LocationSvg";
import PickupSvg from "@/public/assets/svgs/tracking/PickupSvg";
import PlaneSvg from "@/public/assets/svgs/tracking/PlaneSvg";
import PortSvg from "@/public/assets/svgs/tracking/PortSvg";
import WarehouseSvg from "@/public/assets/svgs/tracking/WarehouseSvg";
import {
  ShipmentDetailInfoDetailsList,
  ShipmentDetailsInfoHeader,
  ShipmentDetailsTabHeader,
} from "@/types/shipmentDetail";

export const shipmentDetailTabHeaders: ShipmentDetailsTabHeader[] = [
  { label: "Details" },
  { label: "Messages" },
  { label: "Documents" },
  { label: "Quotes" },
  { label: "Cargo Details" },
  { label: "Invoices" },
  { label: "Products" },
  { label: "Tasks", count: 0 },
];

export const shipmentDetailInfoHeaders: ShipmentDetailsInfoHeader[] = [
  { label: "Origin", details: "Guandong, China" },
  { label: "Destination", details: "Lagos, Nigeria" },
  { label: "ETA", tip: "+3 days", details: "23 May, 2023" },
];

export const shipmentDetailInfoDetails: ShipmentDetailInfoDetailsList[] = [
  {
    label: "Description",
    desc: "Shredded Plastics",
  },

  {
    label: "Commodity/STC",
    desc: "Shredded Plastics",
  },

  {
    label: "Created Date",
    desc: "23 Mar, 2023",
  },

  {
    label: "Commodity",
    desc: "Cocoa",
  },
  {
    label: "Total Weight (Kg)",
    desc: "705kg",
  },

  {
    label: "Goods Value",
    desc: "USD 10,000",
  },

  {
    label: "BL Number",
    desc: "MSK123456",
  },
  {
    label: "Packaging Type",
    desc: "Bags",
  },

  {
    label: "First Demurrage Date",
    desc: "12 Apr, 2023",
  },
];

export const shipmentDetailImportDetails: ShipmentDetailInfoDetailsList[] = [
  {
    label: "HS Code",
    desc: "4523434232",
  },

  {
    label: "Form M",
    desc: "Shredded Plastics",
  },

  {
    label: "Form M Date",
    desc: "--",
  },

  {
    label: "PAAR no",
    desc: "USD 300",
  },
  {
    label: "PAAR Date",
    desc: "12 Dec, 2023",
  },

  {
    label: "Processing",
    desc: "First Bank of Nigeria",
  },
];

export const shipmentDetailServiceType: ShipmentDetailInfoDetailsList[] = [
  {
    label: "Shipping Mode",
    desc: "Ocean LCL ",
    icon: <ShippingModeSvg />,
  },

  {
    label: "Service",
    desc: "Door to Port",
  },

  {
    label: "Incoterms",
    desc: "DDP",
  },

  {
    label: "Shipping Line",
    desc: "Maersk",
  },
  {
    label: "Vessel / Voyage No.",
    desc: "Estimated Departure",
  },

  {
    label: "Processing",
    desc: "First Bank of Nigeria",
  },

  {
    label: "Port of Loading",
    desc: "Ningbo",
  },
  {
    label: "Port of Discharge",
    desc: "Apapa",
  },

  {
    label: "Estimated Arrival",
    desc: "2 May, 2021",
  },
];

export const shipmentTrackingList = [
  {
    icon: <PlaneSvg />,
    title: "Booking Initiated",
    createdAt: "Sep 2, 2021",
    location: "NG, Lagos",
  },

  {
    icon: <PickupSvg />,
    title: "Pick up / Trucking",
    createdAt: "Sep 2, 2021",
    container: 1,
    location: "NG, Lagos",
  },

  {
    icon: <WarehouseSvg />,
    title: "In Warehouse",
    container: 2,
    createdAt: "Sep 2, 2021",
    location: "NG, Lagos",
  },

  {
    icon: <PortSvg />,
    title: "At Origin Port",
    container: 2,
    createdAt: "Sep 2, 2021",
    location: "NG, Lagos",
  },

  {
    icon: <LocationSvg />,
    title: "Arrived at Destination Port",
    isActive: false,
  },

  {
    icon: <CustomSvg />,
    title: "Undergoing Custom Clearance",
    isActive: false,
  },

  {
    icon: <WarehouseSvg />,
    title: "In Warehouse",
    isActive: false,
  },
  {
    icon: <PickupSvg />,
    title: "Delivery",
    isActive: false,
  },
];
