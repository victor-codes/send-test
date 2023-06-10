import PackageSvg from "@/public/assets/svgs/PackageSvg";
import PlaneSvg from "@/public/assets/svgs/PlaneSvg";
import ShippingModeSvg from "@/public/assets/svgs/ShippingModeSvg";
import TruckSvg from "@/public/assets/svgs/TruckSvg";
import CustomSvg from "@/public/assets/svgs/tracking/CustomSvg";
import { ShipmentListMockDataType } from "@/types/shipments";

export const shipmentTableData: ShipmentListMockDataType[] = [
  {
    icon: <PlaneSvg />,
    bl_number: "34567890",
    title: "A box of shoes",
    origin: "Felixstowe, UK",
    date: "May 25",
    destination: "Felixstowe, UK",
    eta: "Oct 25",
    status: "current",
    volume: "4 x 20",
    carrier: "Maersk",
    tags: ["Import", "PO #1234"],
  },
  {
    icon: <ShippingModeSvg />,
    bl_number: "34567890",
    title: "A box of shoes",
    origin: "Felixstowe, UK",
    date: "Jun 25",
    destination: "Felixstowe, UK",
    eta: "Jun 25",
    status: "completed",
    volume: "4 x 20",
    carrier: "Maersk",
    tags: ["Import", "PO #1234"],
  },
  {
    icon: <PackageSvg />,
    bl_number: "34567890",
    title: "A box of shoes",
    origin: "Felixstowe, UK",
    date: "Aug 25",
    destination: "Felixstowe, UK",
    eta: "Oct 25",
    status: "late",
    volume: "4 x 20",
    carrier: "Maersk",
    tags: ["Import", "PO #1234"],
  },
  {
    icon: <TruckSvg />,
    bl_number: "34567890",
    title: "A box of shoes",
    origin: "Felixstowe, UK",
    date: "Oct 25",
    destination: "Felixstowe, UK",
    eta: "Oct 25",
    status: "current",
    volume: "4 x 20",
    carrier: "Maersk",
    tags: ["Import", "PO #1234"],
  },
  {
    icon: <CustomSvg />,
    bl_number: "34567890",
    title: "A box of shoes",
    origin: "Felixstowe, UK",
    date: "May 25",
    destination: "Felixstowe, UK",
    eta: "May 25",
    status: "completed",
    volume: "4 x 20",
    carrier: "Maersk",
    tags: ["Import", "PO #1234"],
  },
  {
    icon: <PlaneSvg />,
    bl_number: "34567890",
    title: "A box of shoes",
    origin: "Felixstowe, UK",
    date: "Jan 25",
    destination: "Felixstowe, UK",
    eta: "Jan 25",
    status: "late",
    volume: "4 x 20",
    carrier: "Maersk",
    tags: ["Import", "PO #1234"],
  },

  {
    icon: <PackageSvg />,
    bl_number: "34567890",
    title: "A box of shoes",
    origin: "Felixstowe, UK",
    date: "Apr 25",
    destination: "Felixstowe, UK",
    eta: "Apr 25",
    status: "late",
    volume: "4 x 20",
    carrier: "Maersk",
    tags: ["Import", "PO #1234"],
  },
  {
    icon: <CustomSvg />,
    bl_number: "34567890",
    title: "A box of shoes",
    origin: "Felixstowe, UK",
    date: "Oct 25",
    destination: "Felixstowe, UK",
    eta: "Oct 25",
    status: "current",
    volume: "4 x 20",
    carrier: "Maersk",
    tags: ["Import", "PO #1234"],
  },
];

export const shipmentTableHeaders = [
  "BL Number",
  "Origin",
  "Destination",
  "Status",
  "Volume",
  "Carrier",
];

export const convertToPath = (str: string) => {
  return `/${str.toLocaleLowerCase().split(" ").join("-")}`;
};

export const filterTypes: string[] = [
  "Trade Direction",
  "Commodity",
  "Forwarder",
  "Destination",
];

export const filterByList = [
  {
    label: "Date",
    options: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "june",
      "july",
      "aug",
      "sept",
      "nov",
      "dec",
    ],
  },

  {
    label: "Status",
    options: ["late", "current", "completed"],
  },
];

export const convertToShortcode = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

  return `${month}-${day}`;
};
