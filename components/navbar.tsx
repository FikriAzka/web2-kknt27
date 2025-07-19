"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // tambahkan di dalam Navbar()

  return (
    <nav className="bg-white border-b shadow-sm px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logokkn.png"
            alt="Logo KKN"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 font-medium">
            Beranda
          </Link>
          <Link href="/poslitkes" className="hover:text-blue-600 font-medium">
            Poslitkes
          </Link>
          <Link
            href="/antropometri"
            className="hover:text-blue-600 font-medium"
          >
            Antropometri
          </Link>
          <Link href="/stunting" className="hover:text-blue-600 font-medium">
            Stunting
          </Link>
          <Link href="/dokumentasi" className="hover:text-blue-600 font-medium">
            Dokumentasi
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button>
                <Menu className="w-6 h-6 text-gray-800" />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/30 z-50" />
              <Dialog.Content className="fixed inset-0 bg-white z-50 flex flex-col p-6">
                <div className="flex justify-between items-center mb-8">
                  <Dialog.Title className="text-xl font-bold text-blue-800">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button>
                      <X className="w-6 h-6 text-gray-700" />
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="flex flex-col divide-y divide-gray-300 text-center text-xl font-semibold text-gray-800">
                  {[
                    { href: "/", label: "Beranda" },
                    { href: "/poslitkes", label: "Poslitkes" },
                    { href: "/antropometri", label: "Antropometri" },
                    { href: "/stunting", label: "Stunting" },
                    { href: "/dokumentasi", label: "Dokumentasi" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`py-5 transition-colors ${
                        pathname === item.href
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </nav>
  );
}
