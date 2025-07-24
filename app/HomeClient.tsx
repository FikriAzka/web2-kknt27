"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <Hero
        title="Pelatihan Budikdamber dan Olahan Bakso Ikan Berbahan Dasar Lele"
        subtitle="sebagai Upaya Ketahanan Pangan Keluarga"
        image="/lele.jpeg"
      />

      {/* Sekilas Panduan */}
      <RevealOnScroll variant="fadeRight" delay={0.2}>
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
          <div className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 inline-block border-b border-gray-300 pb-1">
                Informasi Terkait
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mb-12">
              {/* Card 4 */}
              <Link
                href="/budikdamber"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow transition hover:shadow-2xl bg-white block"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/garas_lele.jpeg"
                    alt="Budikdamber"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-700/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-indigo-800 mb-2">
                    Budikdamber & SOP
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Budikdamber (budidaya ikan dalam ember) merupakan teknik
                    praktis menanam kangkung sambil memelihara lele. Cocok untuk
                    rumah tangga...
                  </p>
                  <span className="inline-flex items-center text-indigo-600 group-hover:text-indigo-800 font-medium text-sm mt-2">
                    Baca selengkapnya
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card 5 */}
              <Link
                href="/hidroponik.jpeg"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow transition hover:shadow-2xl bg-white block"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/pupuk.jpeg"
                    alt="Hidroponik"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lime-700/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-lime-800 mb-2">
                    Hidroponik & Pupuk Cair
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Pemanfaatan lahan sempit untuk budidaya sayur sehat dengan
                    sistem hidroponik dan penggunaan pupuk cair organik dari
                    limbah rumah tangga...
                  </p>
                  <span className="inline-flex items-center text-lime-600 group-hover:text-lime-800 font-medium text-sm mt-2">
                    Baca selengkapnya
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card 6 */}
              <Link
                href="/potensiumkm"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow transition hover:shadow-2xl bg-white block"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/pian_lele.jpeg"
                    alt="Potensi UMKM"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                    Potensi UMKM
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Menggali potensi ekonomi lokal berbasis komunitas melalui
                    pemberdayaan UMKM dalam produksi pangan, kerajinan, dan
                    produk lokal lainnya...
                  </p>
                  <span className="inline-flex items-center text-yellow-600 group-hover:text-yellow-800 font-medium text-sm mt-2">
                    Baca selengkapnya
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card 7 */}
              <Link
                href="/olahanlele"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow transition hover:shadow-2xl bg-white block"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/demo_baso.jpeg"
                    alt="Olahan Lele"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-700/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-rose-800 mb-2">
                    Olahan Lele
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Kreasi makanan bergizi dari hasil panen lele seperti abon,
                    nugget, dan bakso yang mendukung ketahanan pangan
                    keluarga...
                  </p>
                  <span className="inline-flex items-center text-rose-600 group-hover:text-rose-800 font-medium text-sm mt-2">
                    Baca selengkapnya
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Info Singkat */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lokasi Kegiatan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RW 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-48 relative">
                <iframe
                  src="https://maps.google.com/maps?q=RW%203%20Tembalang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800">
                  RW3, Kelurahan Tembalang, Kecamatan Tembalang, Kota Semarang
                </h3>
                <div className="mt-4 flex gap-2">
                  <a
                    href="https://maps.app.goo.gl/HQt8k4pCZ6FKNEFK6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* RW 7 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-48 relative">
                <iframe
                  src="https://maps.google.com/maps?q=RW%207%20Tembalang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800">
                  RW7, Kelurahan Tembalang, Kecamatan Tembalang, Kota Semarang
                </h3>
                <div className="mt-4 flex gap-2">
                  <a
                    href="https://maps.app.goo.gl/abc123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* RW 8 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-48 relative">
                <iframe
                  src="https://maps.google.com/maps?q=RW%208%20Tembalang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800">
                  RW8, Kelurahan Tembalang, Kecamatan Tembalang, Kota Semarang
                </h3>
                <div className="mt-4 flex gap-2">
                  <a
                    href="https://maps.app.goo.gl/xyz456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
