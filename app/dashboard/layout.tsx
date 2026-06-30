import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import "../globals.css"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      
      {/* LEFT (Sidebar) */}
      <div className="bg-white w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 flex flex-col">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo-v3.png" alt="logo" width={42} height={42} />
          <span className="hidden min-[1024px]:block font-bold">
            EduNexus
          </span>
        </Link>

        {/* Menu */}
        <div className="mt-6 flex-1 overflow-auto">
          <Menu />
        </div>

      </div>

      {/* RIGHT (Main Content) */}
      <div className="bg-gray-50 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-auto flex flex-col">
        {children}
      </div>

    </div>
  );
}