"use client";

import { Nav } from "../../types/Nav";
import { handleSmoothScroll } from "../../lib/smoothScroll";
import clsx from "clsx";
import Link from "next/link";
import React, { useState, useRef } from "react";

export interface NavigationProps {
  nav: Array<Nav>;
}

export const Navigation: React.FC<NavigationProps> = ({ nav }) => {
  // const pathname = usePathname();
  // const activeLink = (url: string) => pathname == url;

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const navRef = useRef<HTMLUListElement>(null);

  const handleMouseEnter = (
    itemName: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    const target = event.currentTarget;
    const nav = navRef.current;

    if (nav && target) {
      const navRect = nav.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      setHoverStyle({
        left: targetRect.left - navRect.left,
        width: targetRect.width,
        height: targetRect.height,
        top: targetRect.top - navRect.top,
      });
      setHoveredItem(itemName);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav>
      <ul
        ref={navRef}
        className="relative flex items-center"
        onMouseLeave={handleMouseLeave}
      >
        {/* Sliding background */}
        <div
          className={clsx(
            "absolute z-10 bg-black rounded-full transition-all duration-300 ease-out",
            hoveredItem ? "opacity-100" : "opacity-0"
          )}
          style={hoverStyle}
        />
        {nav.map((item) => (
          <li key={item.name}>
            {item.url && (
              <Link
                href={item.url}
                onClick={(e) => handleSmoothScroll(e, item.url!)}
                onMouseEnter={(e) => handleMouseEnter(item.name, e)}
                className={clsx(
                  "outline-bravo | relative z-20 block px-4 py-2 font-bold duration-300 transition-all rounded-full",
                  hoveredItem === item.name
                    ? "text-[#ed5a2e]"
                    : "text-alpha-dark-800 dark:text-[#ed5a2e] hover:text-[#ed5a2e]"
                )}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
