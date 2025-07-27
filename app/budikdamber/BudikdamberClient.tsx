"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";

import {
  ChevronDown,
  ChevronUp,
  Fish,
  Droplets,
  Leaf,
  Settings,
  Calendar,
  Target,
  Eye,
  Heart,
  Users,
  Shield,
  Recycle,
  Award,
  Clock,
  BookOpen,
  AlertCircle,
  CheckCircle,
  Scale,
  Beaker,
} from "lucide-react";

type SectionKey =
  | "pengertian"
  | "persiapan"
  | "budidaya"
  | "fermentasi"
  | "panen"
  | "sop";

type SectionProps = {
  id: SectionKey;
  title: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
};

const BudikdamberPage = () => {
  const [openSections, setOpenSections] = useState({
    pengertian: true,
    persiapan: false,
    budidaya: false,
    fermentasi: false,
    panen: false,
    sop: false,
  });

  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const Section = ({ id, title, children, icon: Icon }: SectionProps) => (
    <div className="bg-white rounded-xl shadow-lg border border-blue-100 mb-6">
      <button
        onClick={() => toggleSection(id)}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100 flex items-center justify-between hover:from-blue-100 hover:to-cyan-100 transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <Hero
        title="Budidaya Ikan Lele Sistem Budikdamber"
        subtitle="Solusi efisien budidaya ikan lele dalam ember untuk ketahanan pangan keluarga"
        image="/garas_lele.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Pengertian dan Latar Belakang */}
        <Section id="pengertian" title="Pengertian Budikdamber" icon={BookOpen}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Fish className="h-5 w-5 text-blue-500 mr-2" />
                  Apa itu Budikdamber?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Budikdamber (Budidaya Ikan dalam Ember) adalah teknik budidaya
                  ikan lele yang memanfaatkan ember sebagai wadah pemeliharaan.
                  Sistem ini cocok untuk lahan terbatas dan dapat dilakukan di
                  rumah.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Target className="h-5 w-5 text-green-500 mr-2" />
                  Tujuan Budikdamber
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Meningkatkan ketahanan pangan keluarga
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Membuka peluang usaha rumahan
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Memanfaatkan lahan terbatas secara efisien
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Keunggulan Budikdamber
              </h3>
              <div className="space-y-3 text-blue-700">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-base">
                    Modal relatif kecil dan mudah dikelola
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-base">
                    Dapat dilakukan di area terbatas
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-base">
                    Hasil dapat diolah menjadi produk bernilai tinggi
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-base">
                    Ramah lingkungan dan berkelanjutan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Persiapan Alat dan Bahan */}
        <Section
          id="persiapan"
          title="Persiapan Alat dan Bahan"
          icon={Settings}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-800 mb-6 flex items-center">
                <Settings className="h-6 w-6 mr-3" />
                Alat yang Diperlukan
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Wadah Utama:
                  </h4>
                  <ul className="text-orange-600 text-base space-y-1">
                    <li>• Ember ukuran 80-100 liter</li>
                    <li>• Tutup ember (opsional)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Peralatan Pendukung:
                  </h4>
                  <ul className="text-orange-600 text-base space-y-1">
                    <li>• Aerator mini atau pompa udara</li>
                    <li>• Selang aerator</li>
                    <li>• Batu aerasi</li>
                    <li>• Jaring halus untuk panen</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Alat Monitoring:
                  </h4>
                  <ul className="text-orange-600 text-base space-y-1">
                    <li>• Termometer air</li>
                    <li>• pH meter (opsional)</li>
                    <li>• Timbangan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                <Beaker className="h-6 w-6 mr-3" />
                Bahan yang Diperlukan
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-green-700 mb-2">
                    Bibit Ikan:
                  </h4>
                  <ul className="text-green-600 text-base space-y-1">
                    <li>• Benih lele ukuran 5-7 cm</li>
                    <li>• Jumlah: 50-100 ekor per ember</li>
                    <li>• Pilih yang sehat dan aktif bergerak</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-green-700 mb-2">Pakan:</h4>
                  <ul className="text-green-600 text-base space-y-1">
                    <li>• Pelet ikan lele (protein 28-32%)</li>
                    <li>• Pakan alternatif: cacing, jentik nyamuk</li>
                    <li>• Dedak halus (untuk fermentasi)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-semibold text-green-700 mb-2">
                    Air dan Nutrisi:
                  </h4>
                  <ul className="text-green-600 text-base space-y-1">
                    <li>• Air bersih (tidak mengandung klorin)</li>
                    <li>• Probiotik ikan (opsional)</li>
                    <li>• Garam ikan untuk pengobatan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Budidaya Kangkung */}
        <Section
          id="budidaya"
          title="Budidaya Kangkung Terintegrasi"
          icon={Leaf}
        >
          <div className="space-y-8">
            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                Sistem Budikdamber Terintegrasi
              </h3>
              <p className="text-emerald-700 mb-6">
                Budikdamber dapat dikombinasikan dengan budidaya kangkung untuk
                memaksimalkan pemanfaatan nutrisi dalam air dan menciptakan
                sistem yang lebih berkelanjutan.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    Persiapan Kangkung
                  </h4>
                  <ul className="text-emerald-600 text-base space-y-2">
                    <li>• Pilih bibit kangkung yang segar</li>
                    <li>• Potong akar sepanjang 2-3 cm</li>
                    <li>• Rendam dalam air bersih 30 menit</li>
                    <li>• Siapkan media tanam (rockwool/spons)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Penanaman
                  </h4>
                  <ul className="text-emerald-600 text-base space-y-2">
                    <li>• Letakkan styrofoam di atas ember</li>
                    <li>• Buat lubang untuk kangkung</li>
                    <li>• Masukkan kangkung hingga akar terendam</li>
                    <li>• Pastikan daun tidak terendam air</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
                    <Droplets className="h-5 w-5 mr-2" />
                    Perawatan
                  </h4>
                  <ul className="text-emerald-600 text-base space-y-2">
                    <li>• Pantau pertumbuhan kangkung</li>
                    <li>• Ganti air jika terlalu keruh</li>
                    <li>• Panen kangkung setelah 2-3 minggu</li>
                    <li>• Dapat dipanen berkali-kali</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Fermentasi Kolam */}
        <Section
          id="fermentasi"
          title="Fermentasi Kolam (Pakan Alami)"
          icon={Recycle}
        >
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">
                Pembuatan Pakan Fermentasi (Kolam)
              </h3>
              <p className="text-purple-700 mb-6">
                Pakan fermentasi yang dapat
                mengurangi biaya pakan hingga 70% dan meningkatkan kualitas air
                budidaya.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-3">
                      Bahan Fermentasi:
                    </h4>
                    <ul className="text-purple-600 text-base space-y-2">
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3"></div>
                        Dedak halus 5 kg
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3"></div>
                        Bekatul 2 kg
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3"></div>
                        Tepung ikan 1 kg
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3"></div>
                        Molase/gula merah 200 ml
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3"></div>
                        EM4 50 ml
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 bg-purple-400 rounded-full mr-3"></div>
                        Air secukupnya
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-3">
                      Cara Pembuatan:
                    </h4>
                    <ol className="text-purple-600 text-base space-y-2">
                      <li className="flex items-start">
                        <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          1
                        </span>
                        Campur semua bahan kering
                      </li>
                      <li className="flex items-start">
                        <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          2
                        </span>
                        Larutkan molase dan EM4 dalam air
                      </li>
                      <li className="flex items-start">
                        <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          3
                        </span>
                        Tuang larutan ke bahan kering
                      </li>
                      <li className="flex items-start">
                        <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          4
                        </span>
                        Aduk hingga rata dan bisa dikepal
                      </li>
                      <li className="flex items-start">
                        <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          5
                        </span>
                        Masukkan dalam wadah tertutup
                      </li>
                      <li className="flex items-start">
                        <span className="bg-purple-200 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          6
                        </span>
                        Fermentasi 3-5 hari
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Jadwal dan Cara Pemberian Pakan */}
        <Section id="panen" title="Jadwal Pakan dan Cara Panen" icon={Calendar}>
          <div className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-3" />
                Jadwal Pemberian Pakan
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="text-center mb-4">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-800">Pagi Hari</h4>
                    <p className="text-blue-600 text-base">06.00 - 07.00</p>
                  </div>
                  <ul className="text-blue-600 text-base space-y-1">
                    <li>• Beri pakan 3% dari bobot ikan</li>
                    <li>• Gunakan pakan fermentasi</li>
                    <li>• Cek kondisi air</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h4 className="font-semibold text-blue-800">Siang Hari</h4>
                    <p className="text-blue-600 text-base">12.00 - 13.00</p>
                  </div>
                  <ul className="text-blue-600 text-base space-y-1">
                    <li>• Beri pakan pellet</li>
                    <li>• Jumlah sesuai kebutuhan</li>
                    <li>• Periksa aerator</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <div className="text-center mb-4">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-blue-800">Sore Hari</h4>
                    <p className="text-blue-600 text-base">17.00 - 18.00</p>
                  </div>
                  <ul className="text-blue-600 text-base space-y-1">
                    <li>• Beri pakan fermentasi</li>
                    <li>• Bersihkan sisa pakan</li>
                    <li>• Ganti air jika perlu</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                <Scale className="h-6 w-6 mr-3" />
                Masa Panen dan Kendala
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-4">
                    Masa Panen:
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-green-100">
                      <h5 className="font-medium text-green-800 mb-2">
                        Waktu Panen:
                      </h5>
                      <ul className="text-green-600 text-base space-y-1">
                        <li>• Umur 2-3 bulan pemeliharaan</li>
                        <li>• Berat ikan 150-200 gram/ekor</li>
                        <li>• Panen bertahap atau sekaligus</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-100">
                      <h5 className="font-medium text-green-800 mb-2">
                        Cara Panen:
                      </h5>
                      <ul className="text-green-600 text-base space-y-1">
                        <li>• Kurangi pemberian pakan 1 hari</li>
                        <li>• Gunakan jaring halus</li>
                        <li>• Pilah berdasarkan ukuran</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-700 mb-4">
                    Kendala Umum:
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        <h5 className="font-medium text-red-800">
                          Air Keruh/Bau
                        </h5>
                      </div>
                      <p className="text-red-600 text-base">
                        Solusi: Kurangi pakan, ganti 30% air, tambah aerasi
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        <h5 className="font-medium text-red-800">
                          Ikan Mati Mendadak
                        </h5>
                      </div>
                      <p className="text-red-600 text-base">
                        Solusi: Periksa kualitas air, suhu, dan kandungan
                        oksigen
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        <h5 className="font-medium text-red-800">
                          Pertumbuhan Lambat
                        </h5>
                      </div>
                      <p className="text-red-600 text-base">
                        Solusi: Perbaiki kualitas pakan dan frekuensi pemberian
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* SOP Kesiapan Mental dan Etika Bisnis */}
        <Section
          id="sop"
          title="SOP Kesiapan Mental dan Etika Bisnis"
          icon={Shield}
        >
          <div className="space-y-8">
            {/* Visi Misi */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center">
                    <Eye className="h-6 w-6 mr-3" />
                    Visi
                  </h3>
                  <p className="text-indigo-700 italic">
                    &quot;Menjadikan olahan ikan lele terkemuka yang diakui atas
                    keunggulan produk dan standar pelayanan beretika
                    tinggi.&quot;
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                    <Target className="h-6 w-6 mr-3" />
                    Misi
                  </h3>
                  <ul className="text-purple-700 text-base space-y-2">
                    <li>
                      • Mempersiapkan mental dalam budidaya dan produksi ikan
                      lele berkualitas terbaik
                    </li>
                    <li>
                      • Membangun tim penjualan yang bermoral dan berdaya saing
                    </li>
                    <li>
                      • Memberikan pelayanan pelanggan luar biasa dengan
                      sentuhan manusiawi
                    </li>
                    <li>
                      • Menjaga praktik bisnis yang bertanggung jawab dan
                      berkelanjutan
                    </li>
                    <li>
                      • Menciptakan lingkungan kerja yang positif dan
                      kolaboratif
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kesiapan Mental */}
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-6 flex items-center">
                <Heart className="h-6 w-6 mr-3" />
                Kesiapan Mental
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-3">
                      Kemauan untuk Belajar
                    </h4>
                    <ul className="text-amber-600 text-base space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        Siap mencoba hal baru meskipun belum punya pengalaman
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        Tidak takut gagal atau melakukan kesalahan
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        Terbuka terhadap kritik dan saran
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-3">
                      Kesabaran dalam Proses
                    </h4>
                    <ul className="text-amber-600 text-base space-y-2">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        Menyadari bahwa merawat ikan butuh waktu
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        Tidak terburu-buru ingin hasil instan
                      </li>
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        Tetap sabar menghadapi kendala
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-3">
                      Mengelola Rasa Takut/Jijik
                    </h4>
                    <ul className="text-amber-600 text-base space-y-2">
                      <li>• Tidak semua orang terbiasa memegang ikan</li>
                      <li>
                        • Perlu latihan agar tidak panik saat membersihkan ikan
                      </li>
                      <li>
                        • Dapat dilakukan secara bertahap dengan dukungan rekan
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-3">
                      Percaya Diri
                    </h4>
                    <ul className="text-amber-600 text-base space-y-2">
                      <li className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-yellow-500" />
                        Yakin bahwa kegiatan dapat berhasil jika mengikuti
                        panduan
                      </li>
                      <li className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-yellow-500" />
                        Tidak merasa minder meskipun baru belajar
                      </li>
                      <li className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-yellow-500" />
                        Percaya bahwa proses akan membawa hasil
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-3">
                      Komitmen dan Konsistensi
                    </h4>
                    <ul className="text-amber-600 text-base space-y-2">
                      <li>
                        • Menjalankan kegiatan rutin seperti memberi pakan
                      </li>
                      <li>• Tidak mudah menyerah saat hasil belum terlihat</li>
                      <li>
                        • Tetap semangat meskipun dilakukan di sela kesibukan
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-3">
                      Kecerdasan Emosional
                    </h4>
                    <ul className="text-amber-600 text-base space-y-2">
                      <li>• Mengenali potensi diri</li>
                      <li>• Mampu mengelola emosi saat menghadapi tantangan</li>
                      <li>
                        • Menjaga komunikasi dan lingkungan kerja yang positif
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Etika Bisnis */}
            <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
              <h3 className="text-xl font-semibold text-teal-800 mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-3" />
                Etika Bisnis
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-teal-100">
                  <h4 className="font-semibold text-teal-800 mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Etika Terhadap Konsumen
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-teal-700">
                          Kejujuran dan Kepercayaan
                        </h5>
                        <p className="text-teal-600 text-base">
                          Menjaga kejujuran dan kepercayaan konsumen
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-teal-700">
                          Keamanan Produk
                        </h5>
                        <p className="text-teal-600 text-base">
                          Memastikan produk aman dikonsumsi, bebas kontaminasi,
                          dan higienis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-teal-700">
                          Informasi Lengkap
                        </h5>
                        <p className="text-teal-600 text-base">
                          Menyediakan informasi yang jujur dan lengkap tentang
                          produk
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-teal-700">
                          Penanganan Keluhan
                        </h5>
                        <p className="text-teal-600 text-base">
                          Menyediakan mekanisme penanganan keluhan yang efektif
                          dan empatik
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-teal-100">
                  <h4 className="font-semibold text-teal-800 mb-4 flex items-center">
                    <Recycle className="h-5 w-5 mr-2" />
                    Etika Terhadap Lingkungan
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Leaf className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-teal-700">
                          Pengelolaan Limbah
                        </h5>
                        <p className="text-teal-600 text-base">
                          Mengelola limbah budidaya secara efektif dan ramah
                          lingkungan
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Droplets className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-teal-700">
                          Efisiensi Sumber Daya
                        </h5>
                        <p className="text-teal-600 text-base">
                          Menggunakan air dan energi secara efisien
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-teal-700">
                          Keseimbangan Ekosistem
                        </h5>
                        <p className="text-teal-600 text-base">
                          Menjalankan praktik yang menjaga keseimbangan
                          ekosistem
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-teal-700">
                          Kesadaran Lingkungan
                        </h5>
                        <p className="text-teal-600 text-base">
                          Meningkatkan kesadaran lingkungan di kalangan tim
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Epilog */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Komitmen Profesionalisme
              </h3>
              <p className="text-blue-700 mb-4 leading-relaxed">
                SOP ini adalah bentuk komitmen terhadap profesionalisme,
                integritas, dan keunggulan. Dengan menerapkan kesiapan mental
                dan etika bisnis yang baik, kami berharap kegiatan budidaya dan
                produksi ikan lele tidak hanya menghasilkan produk berkualitas,
                tapi juga menciptakan hubungan jangka panjang dengan pelanggan.
              </p>

              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-3">
                  Keberhasilan penerapan SOP bergantung pada:
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-base">
                  <div className="flex items-center text-blue-600">
                    <Heart className="h-4 w-4 mr-2 text-red-500" />
                    Dedikasi dan kesadaran setiap individu
                  </div>
                  <div className="flex items-center text-blue-600">
                    <BookOpen className="h-4 w-4 mr-2 text-green-500" />
                    Pelatihan berkelanjutan dan umpan balik
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Shield className="h-4 w-4 mr-2 text-blue-500" />
                    Komitmen pada nilai-nilai yang ditetapkan
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
                <p className="text-blue-800 font-medium text-center italic">
                  &quot;Dengan mental yang kuat dan etika yang teguh, setiap
                  tantangan bisa menjadi peluang, dan setiap interaksi akan
                  memperkuat kepercayaan masyarakat terhadap produk kami.&quot;
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default BudikdamberPage;
