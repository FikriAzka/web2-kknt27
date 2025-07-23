import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { TiktokIcon } from "@/components/TiktokIcon";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/kknt_poslitkestembalang",
    Icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@kknt_poslitkestembalang?_t=ZS-8yGaEStgCue&_r=1",
    Icon: TiktokIcon,
  },
];

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
            kesehatan melalui pembentukan poslitkes di Tembalang.
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

        {/* Sosial Media */}
        <div>
          <h4 className="font-semibold text-base mb-4">Ikuti Kami</h4>
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href, name }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="group"
              >
                <div className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 transition">
                  <Icon className="h-5 w-5 text-gray-600 group-hover:text-white transition" />
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs">
            © {new Date().getFullYear()} KKN Poslitkes
          </p>
        </div>
      </div>
    </footer>
  );
}
