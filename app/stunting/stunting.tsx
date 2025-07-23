"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import {
  ChevronDown,
  ChevronUp,
  Users,
  Activity,
  BookOpen,
  Stethoscope,
  Baby,
  Scale,
  Ruler,
  Shield,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  UserCheck,
  Droplets,
  Utensils,
  Home,
  Building,
} from "lucide-react";
type SectionKey = "definition" | "causes" | "prevention" | "posyandu" | "kader";
type SectionProps = {
  id: SectionKey; // pakai union type dari sebelumnya
  title: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
};
const StuntingPage = () => {
  const [openSections, setOpenSections] = useState({
    definition: true,
    causes: false,
    prevention: false,
    posyandu: false,
    kader: false,
  });

  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const Section = ({ id, title, children, icon: Icon }: SectionProps) => (
    <div className="bg-white rounded-xl shadow-lg border border-blue-100 mb-6 ">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100 flex items-center justify-between hover:from-blue-100 hover:to-indigo-100 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <Icon className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        {openSections[id] ? (
          <ChevronUp className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-600" />
        )}
      </button>
      {openSections[id] && <div className="p-6">{children}</div>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <Hero
        title="Pencegahan Stunting"
        subtitle="Upaya Kesehatan di Posyandu untuk Mencegah Stunting pada Anak Indonesia."
        image="/gambar_stunting2.jpg"
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Definisi dan Karakteristik Stunting */}
        <Section
          id="definition"
          title="Pengertian dan Karakteristik Stunting"
          icon={BookOpen}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  Definisi Stunting
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stunting adalah kondisi gagal tumbuh pada anak balita akibat
                  kekurangan gizi kronis yang terjadi sejak 1000 hari pertama
                  kehidupan.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Ruler className="h-5 w-5 text-orange-500 mr-2" />
                  Ciri-ciri Stunting pada Anak
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Tinggi badan lebih pendek dari anak seusianya
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Pertumbuhan melambat
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Perkembangan kognitif terhambat
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Dampak Stunting
              </h3>
              <div className="space-y-3 text-red-700">
                <div className="flex items-start">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Gangguan perkembangan fisik dan kognitif
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Menurunnya produktivitas di masa dewasa
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Risiko penyakit tidak menular meningkat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Penyebab Stunting */}
        <Section id="causes" title="Penyebab Stunting" icon={AlertCircle}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="font-semibold text-yellow-800">
                  Praktik Pengasuhan Kurang Baik
                </h3>
              </div>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• Pola asuh yang tidak tepat</li>
                <li>• Kurang pengetahuan gizi</li>
                <li>• Sanitasi yang buruk</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="font-semibold text-orange-800">
                  Terbatasnya Pelayanan Kesehatan
                </h3>
              </div>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• Akses layanan kesehatan terbatas</li>
                <li>• Kurangnya pemeriksaan rutin</li>
                <li>• Imunisasi tidak lengkap</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-center mb-4">
                <Utensils className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="font-semibold text-red-800">
                  Kurangnya Akses Makanan Bergizi
                </h3>
              </div>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Makanan tidak beragam</li>
                <li>• Kekurangan protein dan mikronutrien</li>
                <li>• Ketidakamanan pangan</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Upaya Pencegahan */}
        <Section
          id="prevention"
          title="Upaya Pencegahan Stunting"
          icon={Shield}
        >
          <div className="space-y-8">
            {/* Intervensi Sensitif */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3" />
                Intervensi Sensitif
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">
                    Sanitasi Total Berbasis Masyarakat (STBM)
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-green-100">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-800">
                          Stop Buang Air Besar Sembarangan (BABS)
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-100">
                      <div className="flex items-center mb-2">
                        <Droplets className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium text-green-800">
                          Cuci Tangan Pakai Sabun (CTPS)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Cuci tangan dengan air bersih dan sabun pada waktu:
                        sebelum makan, setelah BAB, sebelum memegang bayi,
                        setelah menceboki anak.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-700 mb-3">
                    Pengelolaan Air Minum dan Makanan Rumah Tangga (PAMM-RT)
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-green-100">
                      <h5 className="font-medium text-green-800 mb-2">
                        Pengelolaan Air Minum:
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Gunakan air bersih dan aman</li>
                        <li>• Masak air hingga mendidih</li>
                        <li>• Simpan dalam wadah bersih dan tertutup</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-100">
                      <h5 className="font-medium text-green-800 mb-2">
                        Pengelolaan Makanan:
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Masak makanan dengan bersih</li>
                        <li>• Simpan makanan dengan benar</li>
                        <li>• Konsumsi makanan bergizi seimbang</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intervensi Spesifik */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <Stethoscope className="h-6 w-6 mr-3" />
                Intervensi Spesifik
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <Baby className="h-5 w-5 mr-2" />
                      Program 1000 HPK (Hari Pertama Kehidupan)
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Pemeriksaan kehamilan rutin</li>
                      <li>• Konsumsi tablet Fe untuk ibu hamil</li>
                      <li>• Persalinan yang aman</li>
                      <li>• Perawatan bayi baru lahir</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-3">
                      Program PMBA (Pemberian Makanan Bayi dan Anak)
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-blue-700">
                          Inisiasi Menyusu Dini (IMD)
                        </h5>
                        <p className="text-sm text-gray-600">
                          Kontak kulit dengan kulit segera setelah lahir
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-700">
                          ASI Eksklusif 6 bulan
                        </h5>
                        <p className="text-sm text-gray-600">
                          Hanya ASI tanpa makanan/minuman lain
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-700">
                          MPASI setelah 6 bulan
                        </h5>
                        <p className="text-sm text-gray-600">
                          Makanan pendamping ASI yang bergizi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-3">
                      Imunisasi Dasar Lengkap
                    </h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex justify-between border-b pb-1">
                        <span>0-24 jam</span>
                        <span className="font-medium">Hepatitis B</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>1 bulan</span>
                        <span className="font-medium">BCG, Polio 1</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>2 bulan</span>
                        <span className="font-medium">
                          DPT/HB/Hib1, Polio 2
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>9 bulan</span>
                        <span className="font-medium">Campak-Rubella</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <Scale className="h-5 w-5 mr-2" />
                      Pemantauan Tumbuh Kembang
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Penimbangan rutin setiap bulan</li>
                      <li>• Pengukuran tinggi/panjang badan</li>
                      <li>• Pencatatan di Kartu Menuju Sehat (KMS)</li>
                      <li>• Deteksi dini gangguan pertumbuhan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Peran Posyandu */}
        <Section
          id="posyandu"
          title="Peran Posyandu dalam Pencegahan Stunting"
          icon={Building}
        >
          <div className="space-y-8">
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">
                Tentang Posyandu
              </h3>
              <p className="text-purple-700 mb-4">
                Posyandu (Pos Pelayanan Terpadu) adalah bentuk Upaya Kesehatan
                Bersumber Masyarakat (UKBM) yang dikelola dan diselenggarakan
                dari, oleh, untuk dan bersama masyarakat.
              </p>

              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 text-center border border-purple-100">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-800 font-bold">Pratama</span>
                  </div>
                  <p className="text-sm text-purple-700">
                    Posyandu baru terbentuk
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-purple-100">
                  <div className="bg-purple-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-800 font-bold">Madya</span>
                  </div>
                  <p className="text-sm text-purple-700">
                    Sudah dapat melaksanakan kegiatan
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-purple-100">
                  <div className="bg-purple-300 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-800 font-bold">Purnama</span>
                  </div>
                  <p className="text-sm text-purple-700">
                    Sudah dapat melaksanakan kegiatan tambahan
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-purple-100">
                  <div className="bg-purple-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">Mandiri</span>
                  </div>
                  <p className="text-sm text-purple-700">
                    Dapat hidup mandiri dengan dana swadaya
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-4 flex items-center">
                  <Scale className="h-5 w-5 mr-2" />
                  Pengukuran Berat Badan
                </h4>
                <ul className="text-indigo-700 text-sm space-y-2">
                  <li>• Penimbangan rutin bulanan</li>
                  <li>• Pencatatan hasil penimbangan</li>
                  <li>• Monitoring pertumbuhan anak</li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-4 flex items-center">
                  <Ruler className="h-5 w-5 mr-2" />
                  Pengukuran Tinggi/Panjang Badan
                </h4>
                <ul className="text-teal-700 text-sm space-y-2">
                  <li>• Pengukuran panjang badan (0-24 bulan)</li>
                  <li>• Pengukuran tinggi badan ({">"}24 bulan)</li>
                  <li>• Deteksi stunting</li>
                </ul>
              </div>

              <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
                <h4 className="font-semibold text-pink-800 mb-4 flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Kartu Menuju Sehat (KMS)
                </h4>
                <ul className="text-pink-700 text-sm space-y-2">
                  <li>• Pencatatan pertumbuhan anak</li>
                  <li>• Grafik pertumbuhan</li>
                  <li>• Deteksi dini masalah gizi</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Peran Kader */}
        <Section id="kader" title="Peran Kader Posyandu" icon={UserCheck}>
          <div className="space-y-8">
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Fungsi dan Tugas Kader Posyandu
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-semibold text-amber-800 mb-3">
                    Sebagai Penyuluh
                  </h4>
                  <ul className="text-amber-700 text-sm space-y-2">
                    <li>• Memberikan penyuluhan kesehatan</li>
                    <li>• Edukasi gizi dan pola asuh</li>
                    <li>• Komunikasi yang efektif</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-semibold text-amber-800 mb-3">
                    Sebagai Pencatat
                  </h4>
                  <ul className="text-amber-700 text-sm space-y-2">
                    <li>• Mencatat hasil penimbangan</li>
                    <li>• Mengisi KMS dengan benar</li>
                    <li>• Membuat laporan sederhana</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-semibold text-amber-800 mb-3">
                    Mobilisasi Masyarakat
                  </h4>
                  <ul className="text-amber-700 text-sm space-y-2">
                    <li>• Koordinasi dengan bidan desa</li>
                    <li>• Pendekatan tokoh masyarakat</li>
                    <li>• Mobilisasi keluarga dan masyarakat</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">
                Integritas Kader yang Baik
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-emerald-700 mb-3">
                    Sikap Penyuluh yang Baik:
                  </h4>
                  <ul className="text-emerald-600 text-sm space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                      Ramah dan sabar
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                      Mendengarkan dengan baik
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                      Memberikan informasi yang tepat
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                      Dapat dipercaya
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-emerald-700 mb-3">
                    Metode Penyuluhan:
                  </h4>
                  <ul className="text-emerald-600 text-sm space-y-2">
                    <li>• Ceramah dan diskusi</li>
                    <li>• Demonstrasi praktik</li>
                    <li>• Media visual dan poster</li>
                    <li>• Konseling individual</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default StuntingPage;
