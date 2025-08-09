import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface DropdownMenuItem {
  href: string;
  label: string;
  icon?: IconType;
}

export interface DropdownMenuProps {
  buttonText?: string;
  menuAnchor?: "bottom end" | "bottom start";
  menuItems: DropdownMenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const buttonText = props.buttonText ?? "Menu";
  const menuAnchor = props.menuAnchor ?? "bottom start";

  return (
    <Menu>
      <MenuButton className="border px-6 py-3 duration-150 data-[active]:bg-alpha-light-100 data-[hover]:bg-alpha-light-100">
        {buttonText}
      </MenuButton>
      <MenuItems
        className="-mt-px border bg-alpha-light-100"
        anchor={menuAnchor}
      >
        {props.menuItems.map((item, index) => {
          const Icon = item.icon ?? null;

          return (
            <MenuItem key={index}>
              <a
                className="flex items-center gap-3 px-6 py-3 duration-150 data-[focus]:bg-alpha-light-200"
                href={item.href}
              >
                {Icon !== null && (
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                )}
                {item.label}
              </a>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
