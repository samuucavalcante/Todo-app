import { type ComponentProps } from "react";
import { MenuLink } from "./menu-link";
import { Menu } from "@/constants/menu";

type MenuListProps = ComponentProps<"ul"> & {};
export async function MenuList({ ...props }: MenuListProps) {
  return (
    <ul {...props} className="flex flex-col">
      {Menu?.map(({ name, icon: Icon, link }) => (
        <li key={name} className="w-full">
        <MenuLink href={link}>
            <Icon size={20} />
            <span>{name}</span>
          </MenuLink>
        </li>
      ))}
    </ul>
  );
}
