import Link from "next/link";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavLink = ({ href, title }) => {
  return (
    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
      <Link href={href}>{title}</Link>
    </NavigationMenuLink>
  );
};

export default NavLink;
