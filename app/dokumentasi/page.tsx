// ✅ app/dokumentasi/page.tsx
import type { Metadata } from "next";
import Dokumentasi from "./Dokumentasi"; 

export const metadata: Metadata = {
  title: "Dokumentasi",
  description: "Dokumentasi Poslitkes",
};

export default function DokumentasiPage() {
  return <Dokumentasi />;
}
