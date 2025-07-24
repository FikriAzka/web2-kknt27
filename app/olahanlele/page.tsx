"use client";
import React, { useState } from "react";
import TabButton from "@/components/TabButton";
import Hero from "@/components/Hero";
import { ChefHat, Fish, Heart, Users, Clock, Utensils } from "lucide-react";


const NutritionCard = ({ title, benefits }) => (
  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
    <h4 className="font-semibold text-green-800 mb-3 flex items-center">
      <Heart className="mr-2" size={20} />
      {title}
    </h4>
    <ul className="text-green-700 space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

const RecipeCard = ({ recipe }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
    <div className="bg-gradient-to-r from-orange-400 to-red-400 p-6 text-white">
      <h3 className="text-3xl font-bold flex items-center justify-center">
        <ChefHat className="mr-3" size={32} />
        {recipe.name}
      </h3>
    </div>

    <div className="p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
              <Utensils className="mr-2" size={20} />
              Bahan-bahan:
            </h4>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {recipe.spices && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                Bumbu Halus/Perasa:
              </h4>
              <ul className="space-y-2">
                {recipe.spices.map((spice, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    {spice}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
              <Clock className="mr-2" size={20} />
              Cara Membuat:
            </h4>
            <ol className="space-y-3">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-700">
                  <span className="bg-orange-500 text-white rounded-full w-7 h-7 inline-flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {recipe.nutrition && (
        <div className="mt-8">
          <NutritionCard title="Kandungan Gizi" benefits={recipe.nutrition} />
        </div>
      )}
    </div>
  </div>
);

export default function OlahanLelePage() {
  const [activeTab, setActiveTab] = useState("bakso");

  const recipes = {
    bakso: {
      name: "Bakso Ikan Lele",
      ingredients: [
        "700 gr ikan lele (setelah di fillet)",
        "5 sdm tepung tapioka",
        "4 siung bawang putih",
        "2 sdt kaldu jamur",
        "2 sdt garam",
        "1 sdt merica bubuk",
        "1 sdt gula pasir",
        "2 sdm air matang",
        "2 blok kecil es batu",
        "1 L air untuk merebus adonan bakso",
      ],
      instructions: [
        "Lumuri ikan lele dengan jeruk nipis dan garam, biarkan 30 menit, kemudian cuci bersih. Fillet ikan lele.",
        "Campur semua bahan bakso (kecuali tepung tapioka) ke dalam chopper. Setelah halus sisihkan ke wadah.",
        "Campurkan bahan yang telah halus dengan tepung tapioka.",
        "Didihkan air, setelah mendidih matikan kompor. Kemudian cetak bakso. Masukkan ke dalam air tadi.",
        "Lakukan sampai adonan habis. Setelah adonan habis nyalakan kembali kompor, rebus sampai bakso mengapung atau matang, kemudian tiriskan.",
      ],
      nutrition: [
        "Protein hewani berkualitas tinggi",
        "Rendah lemak jenuh",
        "Mengandung asam lemak omega-3",
        "Sumber mineral penting",
      ],
    },
    nugget: {
      name: "Nugget Lele",
      ingredients: [
        "250 gr lele yang sudah dikukus",
        "1 buah wortel serut",
        "1 batang daun bawang iris halus",
        "1 butir telur",
        "3 sdm tepung terigu",
      ],
      spices: [
        "3 siung bawang putih",
        "1/2 sdt merica",
        "1 cm jahe",
        "1 sdt garam",
        "1/2 sdt gula pasir",
      ],
      instructions: [
        "Kukus lele hingga matang, pisahkan daging dan durinya baru ditimbang sesuai dengan berat yang tertera di resep lalu hancurkan menggunakan garpu.",
        "Blender daging lele, bumbu halus, dan telur.",
        "Tambahkan wortel dan daun bawang, aduk rata.",
        "Tambahkan tepung terigu, aduk rata.",
        "Siapkan loyang, olesi dengan minyak goreng tipis-tipis. Kukus selama 20 menit. Angkat dan dinginkan.",
      ],
      nutrition: [
        "Vitamin A dari wortel",
        "Serat dari sayuran",
        "Protein lengkap",
        "Rendah kalori",
      ],
    },
    sempol: {
      name: "Sempol Lele",
      ingredients: [
        "250 gr daging ikan lele fillet tanpa duri & kulit",
        "1 butir telur kocok",
        "4 siung bawang putih goreng",
        "2 siung bawang merah goreng",
        "70 gr tapioka",
        "30 gr terigu",
        "1 sdt garam",
        "1 sdt kaldu bubuk",
        "1/2 sdt merica bubuk",
        "1/2 sdt gula pasir",
        "1/2 wortel ukuran sedang (parut)",
        "1 batang daun bawang",
        "1 batang seledri",
        "Stick ice cream secukupnya",
        "1 butir telur untuk celupan",
      ],
      instructions: [
        "Potong kecil-kecil ikan lele yang sudah di fillet, blender menggunakan chopper hingga halus, tambahkan telur, dua bawang yang sudah digoreng, garam, gula pasir, kaldu bubuk, merica bubuk, blender kembali hingga rata.",
        "Aduk rata terigu dan tapioka, sisihkan.",
        "Masukkan 1/2 campuran tepung ke dalam 1/2 adonan daging tadi, lalu blender lagi hingga tercampur rata, kemudian sisihkan. Dan blender lagi 1/2 adonan daging lainnya bersama sisa campuran tepungnya.",
        "Pindahkan semua adonan ke dalam wadah, lalu tambahkan wortel, rajangan daun bawang dan seledri halus, aduk rata.",
        "Olesi tangan dengan minyak goreng, ambil sedikit adonan dan stick ice cream, kemudian kepal-kepal di tangan, giling-giling pakai tangan agar menempel rata di stick ice creamnya.",
        "Siapkan air yang sudah mendidih, kecilkan api, masukkan sempol, biarkan hingga terapung, lalu angkat dan tiriskan.",
        "Jika mau langsung dimakan, masukkan sempol yang sudah direbus ke dalam kocokan telur lalu goreng hingga lapisan telur berubah agak kecoklatan.",
      ],
      nutrition: [
        "Camilan sehat dan praktis",
        "Cocok untuk semua usia",
        "Sumber protein dan vitamin",
        "Ekonomis dan bergizi",
      ],
    },
    siomay: {
      name: "Siomay Lele",
      ingredients: [
        "30 lembar kulit dimsum",
        "350 gr daging lele fillet",
        "2 butir putih telur + 1 kuning telur",
        "1 batang daun bawang, iris halus",
        "3 siung bawang putih, goreng",
        "3 siung bawang merah, goreng",
        "1 buah labu siam, parut & buang airnya",
        "5-6 sdm tepung tapioka",
        "Secukupnya parutan wortel",
      ],
      spices: [
        "1 sdt garam",
        "1/2 sdt kaldu bubuk",
        "1/2 sdt gula pasir",
        "3/4 sdt merica bubuk",
        "1 sdm saos tiram",
      ],
      instructions: [
        "Blender daging dengan telur hingga halus, lalu tambahkan dua bawang goreng, daun bawang, garam, kaldu bubuk, gula pasir dan merica bubuk, blender kembali.",
        "Pindahkan ke wadah baskom lalu tambahkan sagu/tapioka, labu siam, lalu aduk rata.",
        "Siapkan kulit dimsum, lalu beri isian dan bentuk sesuai selera tambahkan wortel parut sebagai hiasan.",
        "Kukus hingga matang, sajikan dengan saos sambal dan mayonaise.",
      ],
      nutrition: [
        "Vitamin C dari labu siam",
        "Beta karoten dari wortel",
        "Protein tinggi",
        "Rendah lemak",
      ],
    },
    otakotak: {
      name: "Otak-otak Lele",
      ingredients: [
        "250 gr daging ikan lele fillet tanpa duri & kulit",
        "1 butir telur kocok",
        "4 siung bawang putih goreng",
        "2 siung bawang merah goreng",
        "70 gr tapioka",
        "30 gr terigu",
        "1 sdt garam",
        "1 sdt kaldu bubuk",
        "1/2 sdt merica bubuk",
        "1/2 sdt gula pasir",
        "1/2 wortel ukuran sedang (parut)",
        "1 batang daun bawang",
        "1 batang seledri",
        "Stick ice cream secukupnya",
        "1 butir telur untuk celupan",
      ],
      instructions: [
        "Potong kecil-kecil fillet ikan lele, lalu haluskan bersama telur, bawang merah dan bawang putih goreng, garam, gula, kaldu bubuk, dan merica hingga lembut dan tercampur rata.",
        "Campurkan tepung terigu dan tapioka, aduk hingga merata.",
        "Bagi adonan ikan dan campuran tepung menjadi dua bagian. Blender masing-masing bagian hingga tercampur rata, lalu satukan dalam satu wadah besar.",
        "Tambahkan wortel parut, daun bawang, dan seledri cincang ke dalam adonan, aduk rata.",
        "Olesi tangan dengan minyak goreng, ambil adonan secukupnya dan kepalkan pada stik es krim hingga padat dan menempel rata.",
        "Rebus otak-otak dalam air mendidih dengan api kecil hingga mengapung. Setelah mengapung, diamkan sebentar, lalu angkat dan tiriskan.",
        "Setelah dingin, otak-otak bisa disimpan di kulkas sebagai frozen food atau langsung disajikan.",
        "Untuk penyajian, celupkan otak-otak rebus ke dalam telur kocok, lalu goreng hingga berwarna kecokelatan.",
      ],
      nutrition: [
        "Dapat disimpan sebagai frozen food",
        "Praktis dan tahan lama",
        "Sumber protein berkualitas",
        "Mengandung sayuran segar",
      ],
    },
    tahubakso: {
      name: "Tahu Bakso Lele",
      ingredients: [
        "10-15 buah tahu kulit",
        "Ikan lele fillet tanpa kulit dan duri",
        "1 butir putih telur",
        "3 siung bawang putih (goreng)",
        "3 kotak kecil es batu (hancurkan)",
        "3/4 sdt baking powder",
        "1,5 sdt garam",
        "1/2 sdt kaldu bubuk",
        "1/2 sdt gula pasir",
        "1/2 sdt merica bubuk",
        "5 sdm tepung tapioka",
      ],
      instructions: [
        "Blender daging ikan lele hingga halus.",
        "Tambahkan semua bahan (kecuali tepung tapioka), lalu blender kembali hingga benar-benar lembut dan tercampur rata.",
        "Masukkan tepung tapioka, kemudian blender kembali hingga adonan tercampur sempurna.",
        "Iris salah satu sisi tahu, lalu isikan adonan bakso ke dalamnya hingga padat.",
        "Rebus tahu berisi adonan dalam air mendidih hingga matang dan mengapung.",
        "Setelah matang, angkat dan tiriskan.",
        "Jika ingin langsung disajikan, goreng tahu bakso hingga berwarna kecokelatan.",
      ],
      nutrition: [
        "Kombinasi protein nabati dan hewani",
        "Kalsium dari tahu",
        "Tekstur unik dan lezat",
        "Cocok untuk vegetarian yang makan ikan",
      ],
    },
    manfaat: {
      name: "Manfaat Gizi Olahan Ikan Lele",
      benefits: [
        "Sumber protein hewani berkualitas tinggi untuk pertumbuhan dan perbaikan jaringan tubuh",
        "Mengandung asam lemak omega-3 dan omega-6 yang mendukung fungsi otak dan kesehatan jantung",
        "Kaya vitamin A, C, K, B12 dari tambahan sayuran seperti wortel dan daun bawang",
        "Mengandung mineral penting seperti zat besi, kalsium, dan fosfor untuk kesehatan darah dan tulang",
        "Kadar lemak jenuh rendah, terutama jika tidak digoreng",
        "Alternatif camilan sehat yang praktis, ekonomis, dan cocok untuk semua kalangan usia",
      ],
    },
  };

  const recipeButtons = [
    { id: "bakso", label: "Bakso", icon: ChefHat },
    { id: "nugget", label: "Nugget", icon: ChefHat },
    { id: "sempol", label: "Sempol", icon: ChefHat },
    { id: "siomay", label: "Siomay", icon: ChefHat },
    { id: "otakotak", label: "Otak-otak", icon: ChefHat },
    { id: "tahubakso", label: "Tahu Bakso", icon: ChefHat },
    { id: "manfaat", label: "Manfaat Gizi", icon: Heart },
  ];

  const currentRecipe = recipes[activeTab];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Resep Olahan Ikan Lele"
        subtitle="Kumpulan resep lezat dan bergizi dari Tim KKN Tematik 27"
        image="/stunting.jpg"
      />

      <div className="container mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-3 shadow-lg max-w-full overflow-x-auto">
            <div className="flex gap-2 flex-wrap justify-center">
              {recipeButtons.map((button) => (
                <TabButton
                  key={button.id}
                  id={button.id}
                  label={button.label}
                  icon={button.icon}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === "manfaat" ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Manfaat Gizi Olahan Ikan Lele
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ikan lele tidak hanya lezat, tetapi juga kaya akan nutrisi
                penting yang dibutuhkan tubuh untuk tumbuh kembang yang optimal.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Kandungan Nutrisi Lengkap
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {currentRecipe.benefits.slice(0, 3).map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-green-50 rounded-lg"
                    >
                      <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {currentRecipe.benefits.slice(3).map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-blue-50 rounded-lg"
                    >
                      <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="text-orange-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-orange-800">
                    Cocok untuk Semua Usia
                  </h4>
                </div>
                <p className="text-orange-700">
                  Olahan ikan lele ini sangat cocok dikonsumsi oleh semua
                  kalangan usia, termasuk anak-anak. Teksturnya yang lembut dan
                  rasa yang lezat membuatnya menjadi pilihan tepat untuk menu
                  sehari-hari yang sehat dan bergizi.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <RecipeCard recipe={currentRecipe} />
          </div>
        )}
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <Fish className="mr-2" size={24} />
            <span className="text-xl font-semibold">Tim KKN Tematik 27</span>
          </div>
          <p className="text-gray-400">
            Menghadirkan inovasi kuliner ikan lele yang sehat, lezat, dan
            bergizi untuk masyarakat
          </p>
        </div>
      </footer>
    </div>
  );
}
