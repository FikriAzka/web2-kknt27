"use client";
import { usePathname } from "next/navigation";

export function MobileMenu({ setOpen }: { setOpen: (value: boolean) => void }) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Beranda" },
    { href: "/tentang/stunting", label: "Stunting" },
    { href: "/tentang/kegiatan", label: "Kegiatan" },
    { href: "/program/kesehatan", label: "Kesehatan" },
    { href: "/program/pendidikan", label: "Pendidikan" },
    { href: "/kontak", label: "Dokumentasi" },
  ];

  return (
    <nav className="flex flex-col items-center text-center text-xl font-semibold text-gray-800 divide-y divide-gray-300">
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className={`w-full py-4 transition-colors ${
            pathname === item.href
              ? "bg-blue-100 text-blue-700"
              : "hover:bg-gray-100"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
