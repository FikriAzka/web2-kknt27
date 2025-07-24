// ✅ app/dokumentasi/page.tsx
import type { Metadata } from "next";
import PoslitkesClient from "./PoslitkesClient"; // 👈 File komponen client

export const metadata: Metadata = {
  title: "Budikdamber",
  description: "Tentang Poslitkes",
};

export default function DokumentasiPage() {
  return <PoslitkesClient />;
}
