import clsx from "clsx";
import Link from "next/link";

interface SidebarItemProps {
  label: string;
  href: string;
  onClick?: () => void;
  active?: boolean;
  icon?: any;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  active,
  icon: Icon,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <li onClick={handleClick}>
      <Link href={href} className={clsx(active && "bg-primary")}>
        <Icon className="h-8 w-8" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
