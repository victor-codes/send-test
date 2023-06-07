export type ShipmentListMockDataType = {
  bl_number: string;
  title: string;
  origin: string;
  createdAt: string;
  destination: string;
  eta: string;
  status: string;
  volume: string;
  carrier: string;
  icon: React.JSX.Element;
  tags: string[];
};

export type LayoutProps = {
  children?: JSX.Element;
  isSidebarMin?: boolean;
};
