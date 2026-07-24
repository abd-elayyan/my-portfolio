"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const navItems = [
    { lable: "Home", id: 1, href: "/" },
    { lable: "About Me", id: 12, href: "/About-me" },
    { lable: "Projects", id: 13, href: "my-projects" },
    { lable: "Contact Me", id: 14, href: "/#contact" },
  ];
  const pathname = usePathname();

  return (
    <div className="flex gap-10 bg-white/10 border rounded-full py-4 px-10 border-white/20">
      {navItems &&
        navItems.map((i) => {
          return (
            <Link
              href={i.href}
              key={i.id}
              className={`${pathname === i.href ? "scale-110" : ""}`}
            >
              <span>{i.lable}</span>
            </Link>
          );
        })}
    </div>
  );
};
