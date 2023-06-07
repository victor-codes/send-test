import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";
import cx from "classnames";
import { LayoutProps } from "@/types/shipments";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, isSidebarMin }: LayoutProps) => {
  return (
    <main
      className={cx("dsb", inter.className, {
        "dsb--mini": isSidebarMin,
      })}
    >
      <div className="dsb-nav">
        <Sidebar min={isSidebarMin} />
      </div>
      {children}
    </main>
  );
};

export default Layout;
