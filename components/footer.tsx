import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 px-6 py-12 md:px-16 lg:px-24 text-sm text-gray-300">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        {/* Brand & Deskripsi */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logokkn.png"
              alt="Logo KKN"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <span className="text-xl font-bold  tracking-tight">
              KKN-T TIM 27
            </span>
          </div>
          <p className=" leading-relaxed">
            Program pengabdian masyarakat untuk pencegahan stunting dan edukasi
            kesehatan di Tembalang.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className=" font-semibold text-base mb-4">Navigasi</h4>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Beranda" },
              { href: "/poslitkes", label: "Poslitkes" },
              { href: "/antropometri", label: "Antropometri" },
              { href: "/stunting", label: "Stunting" },
              { href: "/dokumentasi", label: "Dokumentasi" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className=" hover:text-blue-600 transition font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className=" font-semibold text-base mb-4">Kontak</h4>
          <ul className="space-y-2 ">
            <li>
              Email:{" "}
              <a
                href="mailto:kkn@poslitkes.id"
                className="text-blue-600 hover:underline"
              >
                kkn@poslitkes.id
              </a>
            </li>
            <li>
              Telp:{" "}
              <span className="text-blue-600 font-medium">
                +62 812-3456-7890
              </span>
            </li>
            <li>Alamat: Tembalang, Semarang</li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className=" font-semibold text-base mb-4">Ikuti Kami</h4>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <Link key={idx} href="#" className="group">
                <div className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 transition">
                  <Icon className="h-5 w-5 text-gray-600 group-hover:text-white transition" />
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs ">
            © {new Date().getFullYear()} KKN Poslitkes
          </p>
        </div>
      </div>
    </footer>
  );
}
