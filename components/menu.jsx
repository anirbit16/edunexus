import Link from "next/link";
import { menuItems } from "@/config/menuItems";

export default function Menu({ onItemClick }) {
  return (
    <div className="mt-6 space-y-2">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onItemClick}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Icon className="h-5 w-5" />
            <span className="hidden min-[1024px]:block">
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}