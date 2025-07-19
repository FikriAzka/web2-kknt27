"use client";

import React, { useState } from "react";
import TabButton from "@/components/TabButton"; 
import Hero from "@/components/Hero";
import {
  Calculator,
  Ruler,
  Scale,
  Baby,
  User,
  BookOpen,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

type IMTResult = {
  imt: string;
  category: string;
} | null;

export default function AntropometriPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [imtData, setImtData] = useState<{
    weight: string;
    height: string;
    result: IMTResult;
  }>({
    weight: "",
    height: "",
    result: null,
  });

  const calculateIMT = () => {
    if (imtData.weight && imtData.height) {
      const weight = parseFloat(imtData.weight);
      const height = parseFloat(imtData.height) / 100; // convert cm to m
      const imt = weight / (height * height);

      let category = "";
      if (imt < 17.0) category = "Sangat Kurus (Kekurangan BB tingkat Berat)";
      else if (imt < 18.5) category = "Kurus (Kekurangan BB tingkat Ringan)";
      else if (imt <= 25.0) category = "Normal (BB Ideal)";
      else if (imt <= 27.0) category = "Gemuk (Kelebihan BB tingkat Ringan)";
      else category = "Obesitas (Kelebihan BB tingkat Berat)";

      setImtData((prev) => ({
        ...prev,
        result: { imt: imt.toFixed(1), category },
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <Hero
        title="Panduan Pengukuran Antropometri"
        subtitle="Pengukuran antropometri adalah cara untuk mengukur status gizi
              seseorang melalui pengukuran dimensi dan komposisi tubuh dari
              berbagai tingkatan umur dan gizi."
        image="/next.svg"
      />

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <TabButton
            id="overview"
            label="Overview"
            icon={BookOpen}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            id="indices"
            label="Indeks Antropometri"
            icon={Ruler}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            id="measurements"
            label="Cara Pengukuran"
            icon={Scale}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            id="imt-calculator"
            label="Kalkulator IMT"
            icon={Calculator}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            id="kms"
            label="KMS"
            icon={User}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Main Definition */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Apa itu Antropometri?
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Antropometri adalah suatu pengukuran dimensi dan komposisi
                  tubuh dari berbagai tingkatan umur dan tingkatan gizi.
                  Pengukuran ini merupakan salah satu cara yang digunakan untuk
                  mengukur status gizi seseorang.
                </p>
              </div>

              {/* Indicators */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Indikator Status Antropometri
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "BB/U", desc: "Berat Badan menurut Umur" },
                    { title: "TB/U", desc: "Tinggi Badan menurut Umur" },
                    {
                      title: "BB/TB",
                      desc: "Berat Badan menurut Tinggi Badan",
                    },
                    {
                      title: "Skor Z",
                      desc: "Nilai simpangan dari nilai normal menurut baku pertumbuhan",
                    },
                  ].map((indicator, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100"
                    >
                      <h4 className="font-bold text-blue-800 text-lg">
                        {indicator.title}
                      </h4>
                      <p className="text-gray-700">{indicator.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "indices" && (
            <div className="space-y-8">
              {/* BB/U Index */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
                    <Scale className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Indeks BB/U (Berat Badan/Umur)
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Skor BB/U menggambarkan berat badan anak yang dicapai pada
                    umur tertentu.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Kegunaan:
                    </h4>
                    <ul className="text-green-700 space-y-1">
                      <li>• Menggambarkan indikasi masalah gizi secara umum</li>
                      <li>• Digunakan untuk anak 6 bulan sampai 7 tahun</li>
                      <li>• Mengidentifikasi berat badan kurang atau lebih</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      Keterbatasan:
                    </h4>
                    <ul className="text-yellow-700 space-y-1">
                      <li>
                        • Tidak dapat membedakan anak kurus tinggi dan anak
                        pendek dengan BB cukup
                      </li>
                      <li>• Membutuhkan data umur yang tepat</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TB/U Index */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl">
                    <Ruler className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Indeks TB/U (Tinggi Badan/Umur)
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Skor TB/U menggambarkan tinggi badan anak yang dicapai pada
                    umur tertentu untuk mengidentifikasi stunting.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Karakteristik:
                    </h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>
                        • Dapat mengukur status gizi/kesehatan masa lampau
                      </li>
                      <li>
                        • TB/U rendah menunjukkan anak yang pendek/stunting
                      </li>
                      <li>• Prevalensi tertinggi pada usia 2-3 tahun</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* BB/TB Index */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl">
                    <User className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Indeks BB/TB (Berat Badan/Tinggi Badan)
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    BB/TB menggambarkan berat badan anak dibandingkan dengan
                    tinggi badan yang dicapai.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      Keunggulan:
                    </h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>
                        • BB/TB rendah menunjukkan anak yang kurus/wasting
                      </li>
                      <li>• Tidak tergantung dari umur (1-10 tahun)</li>
                      <li>• Indeks terpilih untuk intervensi anak sensitif</li>
                      <li>• Prevalensi tertinggi pada usia 12-23 bulan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "measurements" && (
            <div className="space-y-8">
              {/* Pengukuran Panjang Badan */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
                    <Baby className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Pengukuran Panjang Badan (Bayi 0-2 tahun)
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Pengukuran untuk anak yang belum bisa berdiri tegak
                    menggunakan infantometer.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-3">
                      Langkah-langkah:
                    </h4>
                    <ol className="text-orange-700 space-y-2 list-decimal list-inside">
                      <li>
                        Letakkan pengukur panjang badan pada meja yang rata
                      </li>
                      <li>
                        Posisikan panel kepala di sebelah kiri dan panel
                        penggeser di kanan
                      </li>
                      <li>
                        Tarik panel penggeser sesuai perkiraan panjang bayi
                      </li>
                      <li>
                        Baringkan bayi terlentang, kepala menempel pada panel
                        tetap
                      </li>
                      <li>Rapatkan kedua kaki dan tekan lutut sampai lurus</li>
                      <li>
                        Baca hasil pada skala ke arah angka yang lebih besar
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Pengukuran Tinggi Badan */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-xl">
                    <Ruler className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Pengukuran Tinggi Badan
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                    <h4 className="font-semibold text-teal-800 mb-3">
                      Menggunakan Microtoise:
                    </h4>
                    <ol className="text-teal-700 space-y-2 list-decimal list-inside text-sm">
                      <li>Lepas sepatu dan aksesoris</li>
                      <li>
                        Kepala, punggung, pantat, betis, tumit menempel dinding
                      </li>
                      <li>Berdiri tegak lurus, pandangan ke depan</li>
                      <li>Tarik pita hingga menyentuh kepala</li>
                      <li>Baca hasil dari depan subjek</li>
                      <li>Lakukan 3 kali pengukuran</li>
                    </ol>
                  </div>
                  <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-cyan-800 mb-3">
                      Menggunakan Stadiometer:
                    </h4>
                    <ol className="text-cyan-700 space-y-2 list-decimal list-inside text-sm">
                      <li>Berdiri bertelanjang kaki di alas</li>
                      <li>Posisi badan tegak, bahu relaks</li>
                      <li>Tulang belikat, pantat, tumit menyentuh tiang</li>
                      <li>Angkat dagu dan luruskan pandangan</li>
                      <li>Turunkan papan hingga menyentuh kepala</li>
                      <li>Baca dan catat hasil</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Pengukuran Berat Badan */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl">
                    <Scale className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Pengukuran Berat Badan
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-800 mb-3">
                      Baby Scale (Bayi {"<"}1 tahun):
                    </h4>
                    <ol className="text-indigo-700 space-y-2 list-decimal list-inside text-sm">
                      <li>Letakkan di tempat datar dan keras</li>
                      <li>Pastikan menunjukkan {"00.00"} (tombol terra)</li>
                      <li>Bayi pakai pakaian minimal</li>
                      <li>Letakkan bayi di tengah baby scale</li>
                      <li>Tunggu bayi tenang dan angka konstan</li>
                      <li>Catat dan lakukan 3 kali pengukuran</li>
                    </ol>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-3">
                      Timbangan Digital:
                    </h4>
                    <ol className="text-purple-700 space-y-2 list-decimal list-inside text-sm">
                      <li>Tempatkan di permukaan rata dan tidak licin</li>
                      <li>Pastikan menunjukkan {"00.00"}</li>
                      <li>Lepas aksesoris dan pakaian tebal</li>
                      <li>Posisi tegak, pandangan lurus</li>
                      <li>Baca setelah angka konstan</li>
                      <li>Lakukan 3 kali pengukuran</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* LILA dan LIKA */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Pengukuran LILA dan LIKA
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-800 mb-3">
                      LILA (Lingkar Lengan Atas):
                    </h4>
                    <ol className="text-emerald-700 space-y-2 list-decimal list-inside text-sm">
                      <li>Tekuk siku 90°</li>
                      <li>Ukur garis tengah lengan (bahu-siku)</li>
                      <li>Tandai titik tengah lengan atas</li>
                      <li>Luruskan lengan</li>
                      <li>Lingkarkan pita di titik tengah</li>
                      <li>Baca dan catat hasil</li>
                    </ol>
                    <div className="mt-4 p-3 bg-red-100 rounded border border-red-300">
                      <p className="text-red-800 font-semibold text-sm">
                        ⚠️ Risiko KEK jika LILA {"<"} 23,5 cm
                      </p>
                    </div>
                  </div>
                  <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
                    <h4 className="font-semibold text-rose-800 mb-3">
                      LIKA (Lingkar Kepala):
                    </h4>
                    <ol className="text-rose-700 space-y-2 list-decimal list-inside text-sm">
                      <li>Posisikan bayi di gendongan ibu</li>
                      <li>Lepas aksesoris kepala</li>
                      <li>Lingkarkan waist ruler di bagian paling menonjol</li>
                      <li>Baca dan catat hasil</li>
                      <li>Lakukan 3 kali pengukuran</li>
                    </ol>
                    <div className="mt-4 p-3 bg-green-100 rounded border border-green-300">
                      <p className="text-green-800 font-semibold text-sm">
                        ✅ Normal: 35cm - 49cm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "imt-calculator" && (
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-3 rounded-xl">
                  <Calculator className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Kalkulator Indeks Massa Tubuh (IMT)
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Berat Badan (kg)
                    </label>
                    <input
                      type="number"
                      value={imtData.weight}
                      onChange={(e) =>
                        setImtData((prev) => ({
                          ...prev,
                          weight: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Masukkan berat badan"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tinggi Badan (cm)
                    </label>
                    <input
                      type="number"
                      value={imtData.height}
                      onChange={(e) =>
                        setImtData((prev) => ({
                          ...prev,
                          height: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Masukkan tinggi badan"
                    />
                  </div>

                  <button
                    onClick={calculateIMT}
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all shadow-lg"
                  >
                    Hitung IMT
                  </button>

                  {imtData.result && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                      <h4 className="font-bold text-green-800 mb-2">
                        Hasil Perhitungan:
                      </h4>
                      <p className="text-2xl font-bold text-green-700">
                        {imtData.result.imt}
                      </p>
                      <p className="text-green-600 font-semibold">
                        {imtData.result.category}
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-4">
                    Kategori IMT:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-2 rounded bg-red-100 border border-red-200">
                      <span className="text-red-800">Sangat Kurus</span>
                      <span className="text-red-600 font-semibold">
                        {"<"} 17,0
                      </span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-orange-100 border border-orange-200">
                      <span className="text-orange-800">Kurus</span>
                      <span className="text-orange-600 font-semibold">
                        17,0 - 18,4
                      </span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-green-100 border border-green-200">
                      <span className="text-green-800">Normal</span>
                      <span className="text-green-600 font-semibold">
                        18,5 - 25,0
                      </span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-yellow-100 border border-yellow-200">
                      <span className="text-yellow-800">Gemuk</span>
                      <span className="text-yellow-600 font-semibold">
                        25,1 - 27,0
                      </span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-red-100 border border-red-200">
                      <span className="text-red-800">Obesitas</span>
                      <span className="text-red-600 font-semibold">
                        {">"} 27,0
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">
                      Rumus IMT:
                    </h5>
                    <p className="text-blue-700 text-center font-mono">
                      IMT = Berat Badan (kg) / Tinggi Badan² (m²)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "kms" && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl">
                    <User className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Kartu Menuju Sehat (KMS)
                  </h2>
                </div>

                <p className="text-gray-700 mb-6">
                  Kartu menuju sehat merupakan alat sederhana yang dapat
                  digunakan untuk memantau tumbuh kembang anak, agar tidak
                  terjadi kesalahan atau ketidakseimbangan dalam pemberian
                  makanan pada anak.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200 text-center">
                    <CheckCircle
                      className="mx-auto text-emerald-600 mb-3"
                      size={32}
                    />
                    <h4 className="font-bold text-emerald-800">
                      Pemantauan Pertumbuhan
                    </h4>
                    <p className="text-emerald-700 text-sm mt-2">
                      Memantau tumbuh kembang anak
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                    <BookOpen
                      className="mx-auto text-blue-600 mb-3"
                      size={32}
                    />
                    <h4 className="font-bold text-blue-800">
                      Catatan Pelayanan
                    </h4>
                    <p className="text-blue-700 text-sm mt-2">
                      Rekam pelayanan kesehatan anak
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
                    <User className="mx-auto text-purple-600 mb-3" size={32} />
                    <h4 className="font-bold text-purple-800">Alat Edukasi</h4>
                    <p className="text-purple-700 text-sm mt-2">
                      Edukasi orang tua
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="text-green-600" size={24} />
                      <h4 className="font-bold text-green-800">
                        Grafik BB Naik
                      </h4>
                    </div>
                    <p className="text-green-700">
                      Grafik BB mengikuti garis pertumbuhan atau kenaikan BB
                      sama dengan KBM (Kenaikan BB Minimal) atau lebih.
                    </p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertCircle className="text-red-600" size={24} />
                      <h4 className="font-bold text-red-800">
                        Grafik BB Turun
                      </h4>
                    </div>
                    <p className="text-red-700">
                      Grafik BB mendatar atau menurun memotong garis pertumbuhan
                      dibawahnya atau kenaikan BB kurang dari KBM.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-amber-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-amber-800 mb-2">
                        Catatan Penting Perhitungan Usia:
                      </h4>
                      <p className="text-amber-700 text-sm">
                        Pencatatan usia bayi & balita ditulis dengan ketentuan
                        perhitungan usia penuh, yaitu dengan batas {">"} 30 hari
                        maka usia bayi & balita dihitung pada usia bulan
                        selanjutnya.
                      </p>
                      <div className="mt-3 space-y-1">
                        <p className="text-amber-700 text-sm">
                          <strong>Contoh:</strong>
                        </p>
                        <p className="text-amber-700 text-sm">
                          • Usia 2 tahun 3 bulan 29 hari → dihitung 2 tahun 3
                          bulan
                        </p>
                        <p className="text-amber-700 text-sm">
                          • Usia 2 tahun 3 bulan 31 hari → dihitung 2 tahun 4
                          bulan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Koreksi Pengukuran */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Koreksi Hasil Pengukuran
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-3">
                      Anak {"<"} 2 tahun diukur berdiri:
                    </h4>
                    <p className="text-blue-700">
                      <strong>Tambahkan 0,7 cm</strong> untuk mengkonversi
                      menjadi panjang badan (konversi gravitasi).
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-800 mb-3">
                      Anak ≥ 2 tahun diukur telentang:
                    </h4>
                    <p className="text-purple-700">
                      <strong>Kurangi 0,7 cm</strong> untuk mengkonversi menjadi
                      tinggi badan (konversi gravitasi).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
