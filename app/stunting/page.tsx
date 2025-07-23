// ✅ app/dokumentasi/page.tsx
import type { Metadata } from "next";
import Stunting from "./stunting"; // 👈 File komponen client

export const metadata: Metadata = {
  title: "Stunting",
  description: "Tentang Stunting",
};

export default function DokumentasiPage() {
  return <Stunting />;
}
