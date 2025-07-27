"use client";
import React, { useState } from "react";
import TabButton from "@/components/TabButton";
import Hero from "@/components/Hero";
// import RevealOnScroll from "@/components/RevealOnScroll";

import {
  Calculator,
  Fish,
  TrendingUp,
  DollarSign,
  Clock,
  Package,
  Users,
  BarChart3,
  ShoppingCart,
  Zap,
} from "lucide-react";

export default function PotensiUMKM() {
  const [activeTab, setActiveTab] = useState("budikdamber");
  const [calculator, setCalculator] = useState({
    type: "budikdamber",
    jumlahEmber: 5,
    bibitPerEmber: 70,
    hargaBibit: 350,
    pakanKg: 1,
    hargaPakan: 15000,
    hargaJual: 25000,
    lamaPanen: 3,
  });

  const [rabBaksoInput, setRabBaksoInput] = useState({
    ikanLele: 25000,
    tapioka: 900,
    bawangPutih: 800,
    kalduJamur: 1800,
    garam: 120,
    merica: 1000,
    gula: 270,
    esBatu: 300,
    airRebus: 7000,
    jerukNipis: 500,
    gas: 5000,
    kemasan: 10000,
    overheadRate: 30, // dalam persen
    hargaJualPerPack: 15000,
    hasilPack: 5,
  });

  const calculateRABBaksoManual = () => {
    const bahanBakuTotal =
      rabBaksoInput.ikanLele +
      rabBaksoInput.tapioka +
      rabBaksoInput.bawangPutih +
      rabBaksoInput.kalduJamur +
      rabBaksoInput.garam +
      rabBaksoInput.merica +
      rabBaksoInput.gula +
      rabBaksoInput.esBatu +
      rabBaksoInput.airRebus +
      rabBaksoInput.jerukNipis;

    const alatBahanTotal = rabBaksoInput.gas + rabBaksoInput.kemasan;

    const biayaProduksi = bahanBakuTotal + alatBahanTotal;
    const overhead = (rabBaksoInput.overheadRate / 100) * biayaProduksi;
    const totalBiaya = biayaProduksi + overhead;

    const totalPenjualan =
      rabBaksoInput.hasilPack * rabBaksoInput.hargaJualPerPack;
    const keuntungan = totalPenjualan - totalBiaya;
    const margin = ((keuntungan / totalPenjualan) * 100).toFixed(1);

    return {
      bahanBakuTotal,
      alatBahanTotal,
      overhead,
      totalBiaya,
      totalPenjualan,
      keuntungan,
      margin,
    };
  };

  const calculateBudikdamber = () => {
    const totalBibit = calculator.jumlahEmber * calculator.bibitPerEmber;
    const biayaBibit = totalBibit * calculator.hargaBibit;
    const biayaPakan =
      calculator.pakanKg * calculator.hargaPakan * calculator.jumlahEmber;
    const biayaKangkung = 7000;
    const biayaEmber = calculator.jumlahEmber * 75000;

    const totalModal = biayaBibit + biayaPakan + biayaKangkung + biayaEmber;
    const estimasiPanen = totalBibit * 0.85; // survival rate 85%
    const beratPerEkor = 0.1; // kg
    const totalPanen = estimasiPanen * beratPerEkor;
    const pendapatan = totalPanen * calculator.hargaJual;
    const keuntungan = pendapatan - (biayaBibit + biayaPakan + biayaKangkung);
    const roi = ((keuntungan / totalModal) * 100).toFixed(1);

    return {
      totalModal,
      biayaBibit,
      biayaPakan,
      biayaKangkung,
      biayaEmber,
      estimasiPanen,
      totalPanen,
      pendapatan,
      keuntungan,
      roi,
    };
  };

  const budikdamberResult = calculateBudikdamber();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <Hero
        title="Potensi UMKM Budikdamber"
        subtitle="Optimalisasi Budidaya Ikan dalam Ember dan Inovasi Olahan Lele untuk
            Ketahanan Pangan Lokal"
        image="/pian_lele.jpeg"
      />

      {/* Navigation Tabs Section dengan warna berbeda */}
      <div className="bg-gray-50 shadow-inner">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3 justify-center mb-1">
            <TabButton
              id="budikdamber"
              label="Budikdamber"
              icon={Fish}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              id="olahan"
              label="Olahan Lele"
              icon={Package}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              id="kalkulator"
              label="Kalkulator Bisnis"
              icon={Calculator}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              id="analisis"
              label="Analisis Risiko"
              icon={BarChart3}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              id="kalkulator_bakso"
              label="RAB Bakso"
              icon={DollarSign}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Budikdamber Section */}
        {activeTab === "budikdamber" && (
          <section className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Budikdamber (Budidaya Ikan dalam Ember)
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Metode sederhana untuk membudidayakan ikan lele dalam ember yang
                dikombinasikan dengan tanaman di atasnya
              </p>
            </div>

            {/* Keunggulan Budikdamber */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                  Hemat Lahan & Air
                </h3>
                <p className="text-gray-600 text-center">
                  Tidak memerlukan lahan luas, cocok untuk lahan urban dan
                  pekarangan rumah
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                  Biaya Murah
                </h3>
                <p className="text-gray-600 text-center">
                  Modal awal rendah dengan biaya operasional yang minimal
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                  Ramah Lingkungan
                </h3>
                <p className="text-gray-600 text-center">
                  Sistem terintegrasi dengan tanaman untuk filter alami
                </p>
              </div>
            </div>

            {/* RAB Budikdamber */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  RAB Budikdamber Dasar
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-medium">Bibit Lele (100 ekor)</span>
                    <span className="font-bold text-blue-600">Rp 35.000</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-medium">Pakan Lele (1 kg)</span>
                    <span className="font-bold text-blue-600">Rp 15.000</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-medium">Kangkung (1 ikat)</span>
                    <span className="font-bold text-blue-600">Rp 7.000</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-medium">Ember</span>
                    <span className="font-bold text-blue-600">Rp 75.000</span>
                  </div>
                  <div className="flex justify-between py-4 bg-blue-50 px-4 rounded-lg">
                    <span className="font-bold text-lg">TOTAL</span>
                    <span className="font-bold text-xl text-blue-600">
                      Rp 132.000
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Potensi Keuntungan
                </h3>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Clock className="w-6 h-6 text-green-600 mr-2" />
                      <span className="font-semibold text-green-800">
                        Lama Panen
                      </span>
                    </div>
                    <p className="text-gray-700">≤ 3 bulan</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Fish className="w-6 h-6 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-800">
                        Kapasitas
                      </span>
                    </div>
                    <p className="text-gray-700">70 ekor/ember</p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <span className="font-semibold text-yellow-800">
                        Harga Jual
                      </span>
                    </div>
                    <p className="text-gray-700">Rp 25.000/kg</p>
                  </div>

                  <div className="bg-green-100 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                      <span className="font-semibold text-green-800">
                        Estimasi Keuntungan
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      Rp 460.000
                    </p>
                    <p className="text-sm text-gray-600">per siklus 3 bulan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informasi Nilai Gizi */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Informasi Nilai Gizi Bakso Ikan Lele
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    60
                  </div>
                  <div className="text-sm text-gray-600">KKal Energi Total</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    6.5g
                  </div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    2.2g
                  </div>
                  <div className="text-sm text-gray-600">Lemak Total</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    2.5g
                  </div>
                  <div className="text-sm text-gray-600">Karbohidrat</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Olahan Lele Section */}
        {activeTab === "olahan" && (
          <section className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Inovasi Olahan Lele - Bakso Ikan Lele
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Meningkatkan nilai tambah ikan lele melalui produk olahan yang
                bernilai ekonomi tinggi
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* RAB Bahan Baku */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  RAB Bahan Baku (1 Resep)
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span>Ikan Lele Fillet (700g)</span>
                    <span className="font-semibold">Rp 25.000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Tepung Tapioka (5 sdm)</span>
                    <span className="font-semibold">Rp 900</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Bawang Putih (4 siung)</span>
                    <span className="font-semibold">Rp 800</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Kaldu Jamur (2 sdt)</span>
                    <span className="font-semibold">Rp 1.800</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Bumbu Lainnya</span>
                    <span className="font-semibold">Rp 2.190</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Air & Es Batu</span>
                    <span className="font-semibold">Rp 7.800</span>
                  </div>
                  <div className="flex justify-between py-3 bg-blue-50 px-4 rounded-lg">
                    <span className="font-bold">Total Bahan Baku</span>
                    <span className="font-bold text-blue-600">Rp 37.690</span>
                  </div>
                </div>
              </div>

              {/* Analisis Keuntungan */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Analisis Keuntungan
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Biaya Bahan Baku</span>
                      <span>Rp 37.690</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Biaya Alat & Bahan</span>
                      <span>Rp 15.000</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Overhead (30%)</span>
                      <span>Rp 15.807</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total Biaya</span>
                        <span>Rp 68.497</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Hasil Produksi</span>
                      <span className="font-semibold">5 pack (50 butir)</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Harga Jual per Pack</span>
                      <span className="font-semibold">Rp 15.000</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Total Penjualan</span>
                      <span className="font-semibold">Rp 75.000</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-bold text-green-600">
                        <span>Keuntungan Bersih</span>
                        <span>Rp 6.503</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-600">
                      Margin Keuntungan
                    </div>
                    <div className="text-2xl font-bold text-blue-600">8.7%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Potensi Pengembangan */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Potensi Pengembangan Usaha
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <ShoppingCart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">Pasar Lokal</h4>
                  <p className="text-sm text-gray-600">
                    Warung makan, kantin sekolah, dan pasar tradisional
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <Package className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">Frozen Food</h4>
                  <p className="text-sm text-gray-600">
                    Produk beku dengan daya tahan lebih lama
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">Catering</h4>
                  <p className="text-sm text-gray-600">
                    Layanan katering acara dan event
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Kalkulator Bisnis */}
        {activeTab === "kalkulator" && (
          <section className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Kalkulator Bisnis Budikdamber
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Hitung potensi keuntungan usaha budikdamber Anda
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Parameter Bisnis
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jumlah Ember
                    </label>
                    <input
                      type="number"
                      value={calculator.jumlahEmber}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          jumlahEmber: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bibit per Ember (ekor)
                    </label>
                    <input
                      type="number"
                      value={calculator.bibitPerEmber}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          bibitPerEmber: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Harga Bibit (Rp/ekor)
                    </label>
                    <input
                      type="number"
                      value={calculator.hargaBibit}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          hargaBibit: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pakan per Ember (kg)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={calculator.pakanKg}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          pakanKg: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0.1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Harga Pakan (Rp/kg)
                    </label>
                    <input
                      type="number"
                      value={calculator.hargaPakan}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          hargaPakan: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Harga Jual (Rp/kg)
                    </label>
                    <input
                      type="number"
                      value={calculator.hargaJual}
                      onChange={(e) =>
                        setCalculator({
                          ...calculator,
                          hargaJual: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                    />
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Hasil Perhitungan
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-blue-800">
                        Total Modal Awal
                      </span>
                      <span className="font-bold text-blue-600">
                        Rp{" "}
                        {budikdamberResult.totalModal.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Biaya Bibit</span>
                      <span className="text-sm">
                        Rp{" "}
                        {budikdamberResult.biayaBibit.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Biaya Pakan</span>
                      <span className="text-sm">
                        Rp{" "}
                        {budikdamberResult.biayaPakan.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Biaya Ember</span>
                      <span className="text-sm">
                        Rp{" "}
                        {budikdamberResult.biayaEmber.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-green-800">
                        Estimasi Panen
                      </span>
                      <span className="font-bold text-green-600">
                        {budikdamberResult.estimasiPanen.toFixed(0)} ekor
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-green-700">
                        Total Berat
                      </span>
                      <span className="text-sm text-green-700">
                        {budikdamberResult.totalPanen.toFixed(1)} kg
                      </span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-yellow-800">
                        Pendapatan
                      </span>
                      <span className="font-bold text-yellow-600">
                        Rp{" "}
                        {budikdamberResult.pendapatan.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </div>

                  <div className="bg-green-100 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-green-800">
                        Keuntungan Bersih
                      </span>
                      <span className="font-bold text-green-600">
                        Rp{" "}
                        {budikdamberResult.keuntungan.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-green-700">
                        ROI (Return on Investment)
                      </span>
                      <span className="text-sm text-green-700">
                        {budikdamberResult.roi}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "kalkulator_bakso" && (
          <section className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Kalkulator RAB Bakso Ikan Lele (Manual)
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Hitung total biaya dan keuntungan berdasarkan harga aktual tiap
                bahan baku.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form Input */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Input Harga Komponen (Rp)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(rabBaksoInput).map(
                    ([key, value]) =>
                      key !== "overheadRate" &&
                      key !== "hargaJualPerPack" &&
                      key !== "hasilPack" && (
                        <div key={key}>
                          <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </label>
                          <input
                            type="number"
                            min="0"
                            value={value}
                            onChange={(e) =>
                              setRabBaksoInput({
                                ...rabBaksoInput,
                                [key]: parseInt(e.target.value) || 0,
                              })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                      )
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Biaya Overhead (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={rabBaksoInput.overheadRate}
                      onChange={(e) =>
                        setRabBaksoInput({
                          ...rabBaksoInput,
                          overheadRate: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Harga Jual per Pack (Rp)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={rabBaksoInput.hargaJualPerPack}
                      onChange={(e) =>
                        setRabBaksoInput({
                          ...rabBaksoInput,
                          hargaJualPerPack: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Jumlah Pack (hasil)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={rabBaksoInput.hasilPack}
                      onChange={(e) =>
                        setRabBaksoInput({
                          ...rabBaksoInput,
                          hasilPack: parseInt(e.target.value) || 1,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Hasil Kalkulasi */}
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Hasil Perhitungan
                </h3>
                {(() => {
                  const result = calculateRABBaksoManual();
                  return (
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between">
                          <span>Total Biaya Bahan Baku</span>
                          <span>
                            Rp {result.bahanBakuTotal.toLocaleString("id-ID")}
                          </span>
                        </div>
                        <hr className="mt-2" />
                      </div>

                      <div>
                        <div className="flex justify-between">
                          <span>Total Alat & Bahan</span>
                          <span>
                            Rp {result.alatBahanTotal.toLocaleString("id-ID")}
                          </span>
                        </div>
                        <hr className="mt-2" />
                      </div>

                      <div>
                        <div className="flex justify-between">
                          <span>Biaya Overhead</span>
                          <span>
                            Rp {result.overhead.toLocaleString("id-ID")}
                          </span>
                        </div>
                        <hr className="mt-2" />
                      </div>

                      <div>
                        <div className="flex justify-between font-bold">
                          <span>Total Biaya Produksi</span>
                          <span>
                            Rp {result.totalBiaya.toLocaleString("id-ID")}
                          </span>
                        </div>
                        <hr className="mt-2 border-gray-300" />
                      </div>

                      <div>
                        <div className="flex justify-between">
                          <span>Total Penjualan</span>
                          <span>
                            Rp {result.totalPenjualan.toLocaleString("id-ID")}
                          </span>
                        </div>
                        <hr className="mt-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-green-700 font-semibold">
                          <span>Keuntungan</span>
                          <span>
                            Rp {result.keuntungan.toLocaleString("id-ID")}
                          </span>
                        </div>
                        <hr className="mt-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-blue-600 font-semibold">
                          <span>Margin (%)</span>
                          <span>{result.margin}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </section>
        )}

        {/* Placeholder for future tabs */}
        {activeTab === "analisis" && (
          <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50 text-gray-800">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Potensi Budikdamber */}
              <div className="text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-blue-800">
                  Potensi Budikdamber
                </h2>
                <div className="space-y-5 text-lg text-gray-700 max-w-4xl mx-auto text-left leading-relaxed">
                  <p>
                    <strong>1.</strong> Permintaan ikan lele di wilayah Semarang
                    masih tinggi dengan harga jual Rp22.000–Rp35.000/kg. Pasokan
                    yang sering tidak mencukupi menjadikan Budikdamber sebagai
                    peluang usaha menjanjikan.
                  </p>
                  <p>
                    <strong>2.</strong> Budikdamber unggul dalam hal efisiensi
                    lahan, biaya operasional rendah, panen fleksibel, dan bisa
                    digabungkan dengan hidroponik sayuran.
                  </p>
                  <p>
                    <strong>3.</strong> Dapat dimulai dari rumah tangga (1–5
                    ember) hingga skala mikro usaha (10–50 ember) untuk hasil
                    panen yang dijual ke pasar lokal.
                  </p>
                </div>
              </div>

              {/* Analisis Risiko dan Mitigasi */}
              <div>
                <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
                  Analisis Risiko & Mitigasi
                </h2>
                <div className="overflow-x-auto shadow-md rounded-xl">
                  <table className="min-w-full text-sm md:text-base border border-gray-200">
                    <thead className="bg-blue-100 text-blue-900">
                      <tr>
                        <th className="px-4 py-3 border">Risiko</th>
                        <th className="px-4 py-3 border">Penjelasan</th>
                        <th className="px-4 py-3 border">Mitigasi / Solusi</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-800">
                      {[
                        {
                          risiko: "Tingkat kematian ikan tinggi",
                          penjelasan:
                            "Disebabkan stres, air kotor, kepadatan tinggi",
                          solusi: [
                            "Gunakan benih sehat dari pembenih terpercaya",
                            "Jaga kualitas air (ganti berkala atau gunakan aerator)",
                            "Hindari overstock (maks 60–80 ekor/ember)",
                          ],
                        },
                        {
                          risiko: "Serangan penyakit",
                          penjelasan: "Penyakit jamur, parasit, atau infeksi",
                          solusi: [
                            "Gunakan probiotik/EM4 secara berkala",
                            "Isolasi ikan sakit",
                            "Sterilisasi ember dan alat sebelum digunakan",
                          ],
                        },
                        {
                          risiko: "Kenaikan harga pakan",
                          penjelasan:
                            "Harga pakan naik karena inflasi atau kelangkaan",
                          solusi: [
                            "Buat pakan alternatif: bekatul, keong mas, maggot",
                            "Beli pakan grosir atau patungan dengan peternak lain",
                          ],
                        },
                        {
                          risiko: "Fluktuasi harga jual ikan",
                          penjelasan: "Harga jual turun saat panen massal",
                          solusi: [
                            "Panen bertahap untuk stabilisasi pasokan",
                            "Bangun kemitraan tetap dengan warung/konsumen",
                            "Olah sendiri menjadi produk jadi",
                          ],
                        },
                        {
                          risiko: "Kegagalan teknis pemula",
                          penjelasan:
                            "Kurangnya pengalaman, salah takaran pakan",
                          solusi: [
                            "Ikuti pelatihan dasar budikdamber",
                            "Mulai skala kecil untuk belajar",
                            "Ikut komunitas budikdamber lokal atau daring",
                          ],
                        },
                        {
                          risiko: "Gangguan lingkungan (bau, nyamuk)",
                          penjelasan:
                            "Bau amis dari ember, potensi jentik nyamuk",
                          solusi: [
                            "Jaga sirkulasi air, tambahkan aerator atau tanaman air",
                            "Pastikan ember tertutup jaring",
                            "Jangan beri pakan berlebihan (bisa busuk)",
                          ],
                        },
                      ].map((item, idx) => (
                        <tr key={idx} className="odd:bg-white even:bg-gray-50">
                          <td className="px-4 py-3 border font-semibold align-top w-1/4">
                            {item.risiko}
                          </td>
                          <td className="px-4 py-3 border align-top w-1/3">
                            {item.penjelasan}
                          </td>
                          <td className="px-4 py-3 border w-1/3">
                            <ul className="list-disc list-inside space-y-1">
                              {item.solusi.map((s, i) => (
                                <li key={i}>{s}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
