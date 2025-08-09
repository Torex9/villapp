import ButtonSkeleton from "./ButtonSkeleton";
import clsx from "clsx";
import { MoveRight } from "lucide-react";
import type { ComponentType, PropsWithChildren, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface ButtonProps {
  href?: string;
  onClick?: () => unknown;
  className?: string;
  disabled?: boolean;
  title?: string;
  color?: "alpha" | "bravo" | "danger" | "success" | "error" | "disabled";
  size?: "small" | "medium" | "large";
  borderRadius?: string;
  startIcon?: IconType;
  endIcon?: IconType;
  hideIcon?: boolean;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  let color = props.color ?? "alpha";
  if (color === "danger") color = "error";
  const disabled = props.disabled ?? false;
  const borderRadius = props.borderRadius ?? "rounded-lg";

  // Calculate the icons to the left/right of the text content
  let IconStart: IconType | null = null;
  let IconEnd: IconType | null = null;
  const iconClassName = clsx(props.size === "large" ? "h-6 w-6" : "h-4 w-4");
  if (!props.hideIcon) {
    if (props.endIcon) {
      IconEnd = props.endIcon;
    } else {
      IconEnd = MoveRight;
    }
    if (props.startIcon) {
      IconStart = props.startIcon;
    }
  }

  if (disabled === true) {
    color = "disabled";
  }

  return (
    <ButtonSkeleton
      href={props.href}
      className={clsx(
        "inline-flex items-center justify-between gap-6 ring-1",
        color === "alpha" &&
          "bg-alpha text-white ring-alpha hover:bg-alpha-dark-200",
        color === "error" &&
          "bg-error text-white ring-error hover:bg-error-dark",
        color === "success" &&
          "bg-success text-white ring-success hover:bg-success-dark",
        color === "disabled" &&
          "cursor-not-allowed bg-gray-200 text-inherit ring-gray-200",
        borderRadius,
        props.className
      )}
      onClick={props.onClick}
      disabled={props.disabled}
      title={props.title}
      size={props.size}
    >
      {IconStart !== null && (
        <IconStart className={iconClassName} strokeWidth={1.5} />
      )}
      {props.children}
      {IconEnd !== null && (
        <IconEnd className={iconClassName} strokeWidth={1.5} />
      )}
    </ButtonSkeleton>
  );
};

export default Button;
