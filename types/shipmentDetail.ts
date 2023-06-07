export type ShipmentDetailsTabHeader = {
  label: string;
  count?: number;
};

export type ShipmentDetailsInfoHeader = {
  label: string;
  tip?: string;
  details: string;
};

export type ShipmentDetailInfoDetailsList = {
  label: string;
  desc: string;
  icon?: React.JSX.Element;
};

export type ShipmentTrackingList = {
  icon: React.JSX.Element;
  title: string;
  createdAt?: string;
  container?: number;
  location?: string;
  isActive?: boolean;
};
