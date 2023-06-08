import { ActiveLinkProps } from "@/types/sidebar";
import { convertToPath } from "@/utils/shipments";
import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";

const ActiveLink = ({ icon, label, isMin }: ActiveLinkProps) => {
  const href = convertToPath(label);

  const { pathname } = useRouter();
  const isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      className={cx("sbr-link", {
        "sbr-link--active": isActive,
        "sbr-link--mini": isMin,
      })}
    >
      {icon}
      <p className="sbr-link-title">{label}</p>
    </Link>
  );
};

export default ActiveLink;
