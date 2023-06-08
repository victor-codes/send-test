import { sidebarFinanaces, sidebarShipments } from "@/utils/sidebar";

import DashboardSvg from "@/public/assets/svgs/sidebar/DashboardSvg";
import cx from "classnames";
import LogoSvg from "@/public/assets/svgs/sidebar/LogoSvg";
import ChervonDownSvg from "@/public/assets/svgs/sidebar/ChervonDownSvg";
import { SidebarProps } from "@/types/sidebar";
import ActiveLink from "./ActiveLink";

const Sidebar = ({ min }: SidebarProps) => {
  return (
    <div>
      <h1 className={cx("dsb-nav-title", { "dsb-nav-title--mini": min })}>
        <LogoSvg min={min} /> <ChervonDownSvg />
      </h1>
      <div>
        <ActiveLink isMin={min} icon={<DashboardSvg />} label="Dashboard" />
      </div>
      <div className="dsb-nav-section">
        {sidebarShipments.map((props, key) => (
          <ActiveLink key={key} isMin={min} {...props} />
        ))}
        <div />
      </div>

      <div className="dsb-nav-section">
        {sidebarFinanaces.map((props, key) => (
          <ActiveLink key={key} isMin={min} {...props} />
        ))}
        <div />
      </div>
    </div>
  );
};

export default Sidebar;
