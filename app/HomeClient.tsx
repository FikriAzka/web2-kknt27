"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin} from "lucide-react";
import Hero from "@/components/Hero";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <Hero
        title="Pembentukan Pos Satelit Kesehatan (Poslitkes)"
        subtitle="Poslitkes hadir sebagai upaya strategis menurunkan prevalensi stunting melalui pemantauan pertumbuhan dan edukasi gizi di tingkat keluarga."
        image="/kknt.png"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
              {/* Card 1: Apa itu Poslitkes */}
              <Link
                href="/poslitkes"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow transition hover:shadow-2xl bg-white block"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/21_6_25_Pelaksanaan poslitkes di RT 4 RW 2_Kelompok 2.jpeg"
                    alt="Poslitkes - Pos Satelit Kesehatan"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-700/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">
                    Apa itu Poslitkes?
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Poslitkes adalah semacam{" "}
                    <span className="italic">“Posyandu sederhana”</span> yang
                    bertempat di rumah warga RT atau Dasa Wisma dan dilengkapi
                    media edukasi...
                  </p>
                  <span className="inline-flex items-center text-blue-600 group-hover:text-blue-800 font-medium text-sm mt-2">
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

              {/* Card 2: Pengukuran Antropometri */}
              <Link
                href="/antropometri"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow transition hover:shadow-2xl bg-white block"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/gambar_antropometri.jpeg"
                    alt="Pengukuran Antropometri"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-700/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Pengukuran Antropometri
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Antropometri merupakan pengukuran BB, TB, LILA, dan LK yang
                    penting untuk menilai status gizi dan mendeteksi stunting...
                  </p>
                  <span className="inline-flex items-center text-green-600 group-hover:text-green-800 font-medium text-sm mt-2">
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

              {/* Card 3: Apa itu Stunting? */}
              <Link
                href="/stunting"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow transition hover:shadow-2xl bg-white block"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/gambar_stunting.jpg"
                    alt="Apa itu Stunting?"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-700/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-2">
                    Apa itu Stunting?
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Stunting adalah kondisi gagal tumbuh pada anak akibat
                    kekurangan gizi kronis, terutama dalam 1000 Hari Pertama
                    Kehidupan...
                  </p>
                  <span className="inline-flex items-center text-red-600 group-hover:text-red-800 font-medium text-sm mt-2">
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
      <RevealOnScroll variant="fadeLeft" delay={0.2}>
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lokasi Pelaksanaan
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Pos Satelit Kesehatan (Poslitkes)
                      </p>
                      <p className="text-gray-600">
                        RW1 - RW8, Kelurahan Tembalang, Kecamatan Tembalang
                      </p>
                      <p className="text-gray-600">
                        Kota Semarang, Jawa Tengah
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href="https://maps.app.goo.gl/HQt8k4pCZ6FKNEFK6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Buka di Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9865537325647!2d110.4417242!3d-7.0505844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c9d0d0a7c3b%3A0x8e6b7a4b0b1a1b1a!2sFakultas%20Kesehatan%20Masyarakat%20UNDIP!5e0!3m2!1sid!2sid!4v1710654102291!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </main>
  );
}
