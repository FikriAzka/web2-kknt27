"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import Hero from "@/components/Hero";

export default function TentangPoslitkes() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
        <Hero
          title="Tentang Pos Satelit Kesehatan (Poslitkes)"
          subtitle="Pusat Pemberdayaan Masyarakat dalam Pencegahan Stunting di Tingkat RT."
          image="/jalan.jpg"
        />

      {/* Definisi */}
      <RevealOnScroll variant="fadeIn" delay={0.5}>
        <section className="bg-white pt-12 pb-8 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">
                  Apa itu Pos Satelit Kesehatan?
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  Pos Satelit Kesehatan (Poslitkes) adalah{" "}
                  <span className="italic">“semacam Posyandu sederhana” </span>
                  yang berlokasi di rumah salah satu warga RT atau Dasa Wisma
                  dan bersifat menetap. Semua peralatan seperti timbangan,
                  pengukur tinggi badan, pita LILA, poster edukasi, dan booklet
                  harus selalu terpasang dan siap digunakan kapan saja. Kegiatan
                  dilakukan secara kolaboratif oleh kader bersama ibu balita.
                  Pos Satelit juga berfungsi sebagai pusat layanan kesehatan
                  tingkat RT berbasis{" "}
                  <span className="font-medium text-blue-700">
                    pemberdayaan masyarakat
                  </span>
                  , yang mendukung{" "}
                  <span className="font-medium text-blue-700">
                    Gerakan Masyarakat Hidup Sehat (Germas)
                  </span>
                  . Melalui pendekatan ini, Poslitkes menjadi sarana
                  pembelajaran bersama yang bertujuan meningkatkan kesadaran
                  bahwa kesehatan merupakan kebutuhan sekaligus tanggung jawab
                  seluruh masyarakat.
                </p>
              </section>

              <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                <Image
                  src="/poslitkes.jpeg"
                  alt="Pos Satelit Kesehatan"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Latar Belakang */}
      <RevealOnScroll variant="fadeRight" delay={0.3}>
        <section className="bg-red-50 pt-8 pb-8 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
              Latar Belakang Masalah
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1: Triple Burden */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">
                  🇮🇩 Triple Burden Gizi di Indonesia
                </h3>
                <p className="text-gray-700 mb-4 text-justify">
                  Indonesia menghadapi beban ganda bahkan tiga beban masalah
                  gizi (Triple Burden), yaitu:
                  <span className="font-medium text-red-600">
                    {" "}
                    stunting
                  </span>{" "}
                  (kerdil akibat kekurangan gizi kronis),
                  <span className="font-medium text-red-600">
                    {" "}
                    wasting
                  </span>{" "}
                  (kurus akibat kekurangan gizi akut), dan
                  <span className="font-medium text-red-600">
                    {" "}
                    underweight
                  </span>{" "}
                  (berat badan kurang). Ketiganya bisa terjadi bersamaan dalam
                  satu komunitas bahkan individu.
                </p>
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-sm text-red-800 leading-relaxed">
                    Untuk mengatasi hal ini, deteksi dini dan pemantauan status
                    gizi anak sangat penting, termasuk edukasi gizi kepada
                    keluarga dan peningkatan layanan berbasis komunitas.
                  </p>
                </div>
              </div>

              {/* Card 2: Overload Posyandu */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">
                  ⚠️ Beban Kerja Posyandu yang Tinggi
                </h3>
                <p className="text-gray-700 mb-4 text-justify">
                  Posyandu di banyak wilayah hanya beroperasi satu kali dalam
                  sebulan di tingkat RW, dengan jumlah balita yang dilayani bisa
                  mencapai lebih dari 100 anak. Dalam waktu pelaksanaan yang
                  terbatas, kader harus melakukan penimbangan, pengukuran tinggi
                  badan, pencatatan, dan edukasi secara singkat.
                </p>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800 leading-relaxed">
                    <strong>Perhitungan:</strong> Jika satu balita memerlukan
                    waktu 20 menit, maka 100 balita × 20 menit =
                    <span className="font-semibold"> 2.000 menit</span> (setara
                    dengan <span className="font-semibold">33 jam</span>).
                    Padahal waktu pelaksanaan Posyandu hanya sekitar 3 jam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Tujuan */}
      <RevealOnScroll variant="fadeLeft" delay={0.3}>
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
              Tujuan Pos Satelit Kesehatan
            </h2>

            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Tujuan Utama */}
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    🎯 Tujuan Utama
                  </h3>
                  <p className="text-gray-700 mb-4 text-justify">
                    Program Pos Satelit Kesehatan (Poslitkes) bertujuan
                    membentuk pusat pelayanan kesehatan tingkat RT yang bersifat{" "}
                    <span className="font-medium text-blue-700">
                      preventif dan edukatif
                    </span>
                    . Pos ini menjadi sarana deteksi dini masalah gizi dan
                    tumbuh kembang balita, serta wadah edukasi gizi dan pola
                    asuh kepada keluarga. Pelibatan aktif kader dan warga
                    bertujuan menumbuhkan kesadaran kolektif akan pentingnya
                    1.000 Hari Pertama Kehidupan (HPK).
                  </p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-800 font-semibold leading-relaxed">
                      Hasil yang diharapkan: meningkatnya pengetahuan ibu dan
                      kader, terlaksananya pemantauan pertumbuhan balita secara
                      berkala, serta menurunnya prevalensi stunting di tingkat
                      RT/Dusun secara berkelanjutan.
                    </p>
                  </div>
                </div>

                {/* Intervensi 1000 HPK */}
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    🔄 Intervensi dalam 1000 Hari Pertama Kehidupan
                  </h3>
                  <p className="text-gray-700 mb-4 text-justify">
                    Periode 1000 HPK (dari kehamilan hingga anak usia 2 tahun)
                    merupakan fase krusial dalam perkembangan otak, tubuh, dan
                    kekebalan anak. Poslitkes memfokuskan pada dua pendekatan
                    intervensi utama:
                  </p>
                  <ul className="text-gray-700 space-y-3 pl-4 list-disc">
                    <li>
                      <strong className="text-green-700">
                        Intervensi Gizi Spesifik:
                      </strong>
                      <br />• Pemantauan berat dan tinggi badan anak secara
                      berkala <br />• Deteksi dini gangguan pertumbuhan <br />•
                      Suplementasi zat gizi penting (zat besi, vitamin A)
                    </li>
                    <li>
                      <strong className="text-green-700">
                        Intervensi Gizi Sensitif:
                      </strong>
                      <br />• Edukasi tentang gizi seimbang untuk ibu hamil dan
                      menyusui <br />• Penyuluhan pola asuh, kebersihan, dan
                      sanitasi <br />• Pemberdayaan ekonomi keluarga melalui
                      pelatihan pangan lokal bergizi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Konsep, Kriteria, dan Aktivitas Poslitkes */}
      <RevealOnScroll variant="zoomIn" delay={0.3}>
        <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
              Konsep, Kriteria, dan Aktivitas Poslitkes
            </h2>

            {/* Row 1: Kriteria & Konsep */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  📋 Kriteria Inklusi
                </h3>
                <ul className="text-gray-700 space-y-3 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Warga bersedia menyediakan ruang rumah sebagai Pos Satelit
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Bersedia menjadi kader Poslit dan berkomitmen secara
                    sukarela
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Pos buka setiap hari atau disesuaikan dengan keberadaan
                    kader
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Memiliki dukungan dan komitmen warga sekitar
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  🏠 Konsep Pembentukan
                </h3>
                <ul className="text-gray-700 space-y-3 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Bertempat di rumah warga RT/Dasa Wisma secara permanen
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Pelatihan TOT (Training of Trainers) untuk Nakes & Kader
                    Senior
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Pengadaan 4 alat antropometri sesuai standar pengukuran
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Pembinaan dan pendampingan rutin oleh tenaga kesehatan
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <strong>Bukan pengganti Posyandu</strong>, namun sebagai
                    pelengkap
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 2: Aktivitas - Cleaned Up */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Aktivitas Poslitkes
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Layanan kesehatan terpadu untuk ibu dan balita melalui
                  pendekatan berbasis masyarakat
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Pengukuran Antropometri */}
                <div className="text-center group">
                  <div className="bg-blue-50 p-6 rounded-xl w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg
                      className="w-12 h-12 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    Pengukuran Antropometri
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Pengukuran rutin berat badan, panjang/tinggi badan, dan
                    lingkar lengan atas balita untuk memantau pertumbuhan dan
                    status gizi secara berkala.
                  </p>
                </div>

                {/* Pembelajaran Kesehatan */}
                <div className="text-center group">
                  <div className="bg-green-50 p-6 rounded-xl w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <svg
                      className="w-12 h-12 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800 mb-4">
                    Pembelajaran Kesehatan
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Media edukatif berbasis booklet, poster, dan alat bantu
                    lainnya untuk meningkatkan pengetahuan ibu dan kader
                    kesehatan tentang gizi dan tumbuh kembang anak.
                  </p>
                </div>

                {/* Konsultasi & Edukasi */}
                <div className="text-center group">
                  <div className="bg-purple-50 p-6 rounded-xl w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <svg
                      className="w-12 h-12 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-purple-800 mb-4">
                    Konsultasi & Edukasi
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Sesi tanya jawab informal antara ibu balita dan kader/nakes
                    mengenai tumbuh kembang, asupan nutrisi, dan praktik
                    pengasuhan yang tepat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </main>
  );
}
