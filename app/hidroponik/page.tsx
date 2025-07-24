"use client";
import React, { useState } from "react";
import {
  Droplets,
  Sprout,
  Beaker,
  Clock,
  AlertCircle,
  CheckCircle,
  Leaf,
  Droplet,
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import TabButton from "@/components/TabButton";
import Hero from "@/components/Hero";

export default function Hidroponik() {
  const [activeTab, setActiveTab] = useState("pengenalan");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <Hero
        title="Hidroponik Modern"
        subtitle="Budidaya Tanaman Tanpa Tanah dengan Teknologi Air dan Nutrisi"
        image="/gambar_stunting2.jpg"
      />

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <TabButton
            id="pengenalan"
            label="Pengenalan"
            icon={Sprout}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            id="poc"
            label="Pupuk Organik Cair"
            icon={Beaker}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            id="sistem"
            label="Sistem Hidroponik"
            icon={Droplets}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            id="tips"
            label="Tips Sukses"
            icon={CheckCircle}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Pengenalan Hidroponik */}
        {activeTab === "pengenalan" && (
          <RevealOnScroll variant="fadeIn" delay={0.2}>
            <section className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Apa itu Hidroponik?
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Hidroponik adalah metode budidaya tanaman yang memanfaatkan
                  air tanpa menggunakan media tanah, dengan menekankan pada
                  pemenuhan kebutuhan nutrisi bagi tanaman.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Definisi
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-green-700">
                      Hidroponik
                    </span>{" "}
                    berasal dari bahasa Yunani, &quot;hydro&quot; (air) dan &quot;ponos&quot;
                    (kerja). Jadi hidroponik berarti budidaya tanaman yang
                    memanfaatkan air dan tanpa menggunakan tanah sebagai media
                    tumbuh.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Dengan memenuhi kebutuhan nutrisi (unsur hara), setiap
                      tanaman dapat tumbuh dengan baik walaupun tidak
                      menggunakan media tanah.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Droplet className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Keunggulan
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        Pengendalian nutrisi yang lebih baik dan presisi
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        Penggunaan air yang lebih efisien dibanding pertanian
                        konvensional
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        Pertumbuhan tanaman yang lebih cepat dan produktif
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Mengurangi penggunaan pestisida dan herbisida</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        Dapat dilakukan di lingkungan yang tidak cocok untuk
                        pertanian tanah
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Media Tanam Hidroponik
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  Media tanam harus mampu menopang akar tanaman sekaligus
                  menahan larutan unsur hara supaya cukup waktu bagi tanaman
                  untuk menyerapnya.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                  {["Rockwool", "Perlite", "Hydroton", "Cocopeat"].map(
                    (media, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg text-center shadow"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Sprout className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800">{media}</h4>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Pupuk Organik Cair */}
        {activeTab === "poc" && (
          <RevealOnScroll variant="fadeIn" delay={0.2}>
            <section className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Pupuk Organik Cair dari Limbah Kangkung
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Membuat nutrisi hidroponik alami menggunakan bahan organik
                  yang mudah didapat
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Bahan */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Bahan</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Air</span>
                      <span className="font-semibold">5 Liter</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Kangkung</span>
                      <span className="font-semibold">1 Ikat</span>
                    </li>
                    <li className="flex justify-between">
                      <span>EM4</span>
                      <span className="font-semibold">100 mL</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Gula Merah</span>
                      <span className="font-semibold">100 gram</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Air Beras</span>
                      <span className="font-semibold">100 mL</span>
                    </li>
                  </ul>
                </div>

                {/* Alat */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Beaker className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Alat</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Galon Mineral Bekas</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Pengaduk</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Pisau</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Jaring/Kain Saringan</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Jerigen</span>
                    </li>
                  </ul>
                </div>

                {/* Waktu */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Waktu</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">
                        Persiapan
                      </h4>
                      <p className="text-gray-700">30 Menit</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">
                        Fermentasi
                      </h4>
                      <p className="text-gray-700">2-4 Minggu</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Siap Pakai
                      </h4>
                      <p className="text-gray-700">Setelah Disaring</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Langkah-langkah */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  Langkah Pembuatan
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 1. Persiapan Bahan */}
                  <section className="bg-white p-6 rounded-xl shadow border border-green-100">
                    <h3 className="text-2xl font-bold text-green-700 flex items-center mb-4">
                      <Sprout className="w-6 h-6 mr-2" />
                      1. Persiapan Bahan
                    </h3>
                    <div className="space-y-4 text-base text-gray-700">
                      <div>
                        <strong>1.</strong> Potong kecil-kecil kangkung untuk
                        mempercepat fermentasi.
                      </div>
                      <div>
                        <strong>2.</strong> Haluskan gula merah dengan 200 ml
                        air hingga larut.
                      </div>
                      <div>
                        <strong>3.</strong> Siapkan 100 ml EM4 sebagai starter
                        fermentasi.
                      </div>
                    </div>
                  </section>

                  {/* 2. Pencampuran */}
                  <section className="bg-white p-6 rounded-xl shadow border border-blue-100">
                    <h3 className="text-2xl font-bold text-blue-700 flex items-center mb-4">
                      <Beaker className="w-6 h-6 mr-2" />
                      2. Pencampuran
                    </h3>
                    <div className="space-y-4 text-base text-gray-700">
                      <div>
                        <strong>1.</strong> Masukkan kangkung ke galon.
                      </div>
                      <div>
                        <strong>2.</strong> Tuang campuran EM4 & gula merah.
                      </div>
                      <div>
                        <strong>3.</strong> Tambahkan air sampai 5 liter.
                      </div>
                      <div>
                        <strong>4.</strong> Aduk hingga merata.
                      </div>
                    </div>
                  </section>

                  {/* 3. Proses Fermentasi */}
                  <section className="bg-white p-6 rounded-xl shadow border border-orange-100">
                    <h3 className="text-2xl font-bold text-orange-700 flex items-center mb-4">
                      <Clock className="w-6 h-6 mr-2" />
                      3. Proses Fermentasi
                    </h3>
                    <div className="space-y-4 text-base text-gray-700">
                      <div>
                        <strong>Penyimpanan:</strong> Simpan di tempat teduh 2–4
                        minggu.
                      </div>
                      <div>
                        <strong>Perawatan:</strong> Buka tutup 1x/hari untuk
                        buang gas & aduk.
                      </div>
                    </div>
                  </section>

                  {/* 4. Penyelesaian */}
                  <section className="bg-white p-6 rounded-xl shadow border border-green-100">
                    <h3 className="text-2xl font-bold text-green-700 flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      4. Penyelesaian
                    </h3>
                    <div className="space-y-4 text-base text-gray-700">
                      <div>
                        <strong>1.</strong> Saring cairan dari ampas menggunakan
                        jaring/kain.
                      </div>
                      <div>
                        <strong>2.</strong> Simpan POC di jerigen tertutup,
                        tempat sejuk.
                      </div>
                      <div>
                        <strong>Tips:</strong> Ampas bisa dijadikan kompos
                        padat.
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Sistem Hidroponik */}
        {activeTab === "sistem" && (
          <RevealOnScroll variant="fadeIn" delay={0.2}>
            <section className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Sistem Hidroponik
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Berbagai teknik dan sistem hidroponik yang dapat diterapkan
                  untuk budidaya tanaman modern
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* NFT System */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                    NFT (Nutrient Film Technique)
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Sistem aliran tipis nutrisi yang mengalir secara kontinyu di
                    sepanjang akar tanaman
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">
                      Cocok untuk: Sayuran daun, selada, kangkung
                    </p>
                  </div>
                </div>

                {/* DWC System */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                    DWC (Deep Water Culture)
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Akar tanaman terendam langsung dalam larutan nutrisi dengan
                    aerasi udara
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      Cocok untuk: Selada, bayam, pak choy
                    </p>
                  </div>
                </div>

                {/* Ebb and Flow */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                    Ebb and Flow
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Sistem pasang surut yang mengalirkan nutrisi secara berkala
                    ke media tanam
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-purple-800 font-medium">
                      Cocok untuk: Tomat, paprika, terong
                    </p>
                  </div>
                </div>

                {/* Drip System */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                    Drip System
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Sistem tetes yang memberikan nutrisi langsung ke akar
                    melalui selang kecil
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm text-orange-800 font-medium">
                      Cocok untuk: Cabai, tomat, mentimun
                    </p>
                  </div>
                </div>

                {/* Aeroponik */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sprout className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                    Aeroponik
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Akar tanaman menggantung di udara dan disemprotkan dengan
                    larutan nutrisi
                  </p>
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <p className="text-sm text-teal-800 font-medium">
                      Cocok untuk: Kentang, tomat, strawberry
                    </p>
                  </div>
                </div>

                {/* Wick System */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                    Wick System
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Sistem sumbu yang menyerap nutrisi dari reservoir ke media
                    tanam secara pasif
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-red-800 font-medium">
                      Cocok untuk: Herbs, tanaman kecil
                    </p>
                  </div>
                </div>
              </div>

              {/* Komponen Sistem Hidroponik */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Komponen Utama Sistem Hidroponik
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplet className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      Reservoir Nutrisi
                    </h4>
                    <p className="text-sm text-gray-600">
                      Wadah penyimpanan larutan nutrisi
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplets className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Pompa Air</h4>
                    <p className="text-sm text-gray-600">
                      Mengalirkan nutrisi ke tanaman
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sprout className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      Media Tanam
                    </h4>
                    <p className="text-sm text-gray-600">
                      Penopang akar tanaman
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Timer</h4>
                    <p className="text-sm text-gray-600">
                      Mengatur jadwal penyiraman
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Tips Sukses */}
        {activeTab === "tips" && (
          <RevealOnScroll variant="fadeIn" delay={0.2}>
            <section className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Tips Sukses Hidroponik
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Panduan praktis untuk mencapai hasil optimal dalam budidaya
                  hidroponik
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Manajemen Nutrisi */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Beaker className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Manajemen Nutrisi
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">
                        EC (Electrical Conductivity)
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Pantau kadar nutrisi dengan EC meter. Nilai ideal:
                        1.2-2.0 mS/cm tergantung jenis tanaman.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        pH Larutan
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Jaga pH antara 5.5-6.5 untuk penyerapan nutrisi optimal.
                        Gunakan pH meter untuk monitoring.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">
                        Penggantian Nutrisi
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Ganti larutan nutrisi setiap 1-2 minggu atau saat EC
                        turun drastis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pencahayaan */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Pencahayaan
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">
                        Sinar Matahari
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Tanaman memerlukan 6-8 jam sinar matahari per hari.
                        Tempatkan di lokasi yang cukup cahaya.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">
                        Lampu LED Grow
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Untuk indoor, gunakan lampu LED full spectrum dengan
                        jarak 30-60 cm dari tanaman.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">
                        Rotasi Pencahayaan
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Putar posisi tanaman secara berkala agar semua bagian
                        mendapat cahaya merata.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Troubleshooting */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Troubleshooting Masalah Umum
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-bold text-red-700 mb-2">
                        🍃 Daun Menguning
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Penyebab:</strong> Kekurangan nitrogen atau pH
                        tidak seimbang
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Solusi:</strong> Periksa dan sesuaikan pH,
                        tambah nutrisi nitrogen
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold text-orange-700 mb-2">
                        🦠 Pertumbuhan Alga
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Penyebab:</strong> Paparan cahaya berlebih pada
                        nutrisi
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Solusi:</strong> Tutup reservoir, kurangi
                        intensitas cahaya
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-blue-700 mb-2">
                        💧 Sistem Tidak Mengalir
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Penyebab:</strong> Pompa rusak atau penyumbatan
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Solusi:</strong> Bersihkan filter, periksa pompa
                        dan selang
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold text-green-700 mb-2">
                        🌱 Pertumbuhan Lambat
                      </h4>
                      <p className="text-gray-700 text-sm mb-2">
                        <strong>Penyebab:</strong> Kurang cahaya atau nutrisi
                        tidak cukup
                      </p>
                      <p className="text-gray-700 text-sm">
                        <strong>Solusi:</strong> Tambah pencahayaan, cek
                        konsentrasi nutrisi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jadwal Perawatan */}
              <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Jadwal Perawatan Rutin
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-blue-800 mb-4 text-center">
                      Harian
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Cek fungsi pompa dan aliran air</li>
                      <li>• Pantau kondisi tanaman</li>
                      <li>• Periksa level air di reservoir</li>
                      <li>• Bersihkan daun yang layu</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-green-800 mb-4 text-center">
                      Mingguan
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Ukur pH dan EC larutan</li>
                      <li>• Tambah air dan nutrisi jika perlu</li>
                      <li>• Bersihkan sistem dari alga</li>
                      <li>• Periksa dan bersihkan filter</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-bold text-purple-800 mb-4 text-center">
                      Bulanan
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Ganti total larutan nutrisi</li>
                      <li>• Bersihkan dan disinfeksi sistem</li>
                      <li>• Periksa dan kalibrasi alat ukur</li>
                      <li>• Evaluasi dan rotasi tanaman</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Rekomendasi Tanaman Pemula */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Tanaman Rekomendasi untuk Pemula
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Selada",
                      difficulty: "Mudah",
                      time: "4-6 minggu",
                      icon: "🥬",
                    },
                    {
                      name: "Kangkung",
                      difficulty: "Mudah",
                      time: "3-4 minggu",
                      icon: "🌿",
                    },
                    {
                      name: "Bayam",
                      difficulty: "Mudah",
                      time: "4-5 minggu",
                      icon: "🍃",
                    },
                    {
                      name: "Pak Choy",
                      difficulty: "Sedang",
                      time: "5-7 minggu",
                      icon: "🥦",
                    },
                  ].map((plant, index) => (
                    <div
                      key={index}
                      className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="text-4xl mb-3">{plant.icon}</div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        {plant.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        Tingkat: {plant.difficulty}
                      </p>
                      <p className="text-sm text-gray-600">
                        Panen: {plant.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </RevealOnScroll>
        )}
      </div>
    </main>
  );
}
