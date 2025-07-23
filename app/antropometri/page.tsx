// ✅ app/dokumentasi/page.tsx
import type { Metadata } from "next";
import AntropometriClient from "./AntropometriClient"; // 👈 File komponen client

export const metadata: Metadata = {
  title: "Antropometri",
  description: "Tentang Antropometri",
};

export default function DokumentasiPage() {
  return <AntropometriClient />;
}
