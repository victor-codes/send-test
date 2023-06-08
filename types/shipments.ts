export type ShipmentListMockDataType = {
  bl_number: string;
  title: string;
  origin: string;
  date: string;
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

export type FilterProps = {
  label: string;
  options?: string[];
  updateFilter?: any;
  isActive?: boolean;
};

export type FilterOptions = {
  status: string;
  date: string;
};
