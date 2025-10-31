import { Link, type LinkProps } from "react-router-dom";

type NavbarLinkProps = {
  link: string;
  label: string;
} & Omit<LinkProps, "to">;

export default function NavbarLink({ link, label, ...props }: NavbarLinkProps) {
  return (
    <Link to={`/${link}`} {...props}>
      {label}
    </Link>
  );
}
