import BookingSvg from "@/public/assets/svgs/sidebar/BookingSvg";
import { FinanceSvg } from "@/public/assets/svgs/sidebar/FinanceSvg";
import { InvoicesSvg } from "@/public/assets/svgs/sidebar/InvoicesSvg";
import { PaymentsSvg } from "@/public/assets/svgs/sidebar/PaymentsSvg";
import PurchaseOrderSvg from "@/public/assets/svgs/sidebar/PurchaseOrderSvg";
import QuotesSvg from "@/public/assets/svgs/sidebar/QuotesSvg";
import ShipmentsSvg from "@/public/assets/svgs/sidebar/ShipmentsSvg";
import { TransactionSvg } from "@/public/assets/svgs/sidebar/TransactionSvg";
import { ActiveLinkProps } from "@/types/sidebar";

export const sidebarShipments: ActiveLinkProps[] = [
  { icon: <ShipmentsSvg />, label: "Shipments" },
  { icon: <BookingSvg />, label: "Bookings" },
  { icon: <QuotesSvg />, label: "Quotes" },
  { icon: <PurchaseOrderSvg />, label: "Purchase Orders" },
];

export const sidebarFinanaces = [
  { icon: <InvoicesSvg />, label: "Invoices" },
  { icon: <PaymentsSvg />, label: "Payments" },
  { icon: <TransactionSvg />, label: "Transactions" },
  { icon: <FinanceSvg />, label: "Trade Finance" },
];
