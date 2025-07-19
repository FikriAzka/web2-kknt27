"use client";
import React, { Suspense, useState } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import Hero from "@/components/Hero";

type GalleryItemType = {
  id: number;
  image: string;
  title: string;
  tanggal: string;
  waktu: string;
  lokasi: string;
  deskripsi: string;
  orientation?:
    | "landscape-wide"
    | "portrait"
    | "portrait-tall"
    | "square"
    | string;
};

// Loading Skeleton Component
const GalleryItemSkeleton = ({ orientation }: { orientation?: string }) => {
  const getGridSpan = (orientation?: string) => {
    switch (orientation) {
      case "landscape-wide":
        return "md:col-span-2 row-span-1";
      case "portrait":
        return "col-span-1 row-span-2";
      case "portrait-tall":
        return "col-span-1 row-span-3";
      case "square":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className={`rounded-lg overflow-hidden ${getGridSpan(orientation)}`}>
      <div className="w-full h-full bg-gray-200 animate-pulse"></div>
    </div>
  );
};

// Gallery Item Component dengan lazy loading
const GalleryItem = ({ item }: { item: GalleryItemType }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getGridSpan = (orientation?: string) => {
    switch (orientation) {
      case "landscape-wide":
        return "md:col-span-2 row-span-1";
      case "portrait":
        return "col-span-1 row-span-2";
      case "portrait-tall":
        return "col-span-1 row-span-3";
      case "square":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:z-10 ${getGridSpan(
        item.orientation
      )}`}
    >
      <div className="relative w-full h-full">
        {/* Loading skeleton saat gambar belum load */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}

        {/* Error state */}
        {imageError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="text-2xl mb-2">📷</div>
              <div className="text-xs">Gagal memuat gambar</div>
            </div>
          </div>
        )}

        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          priority={item.id <= 4} // Priority untuk 4 gambar pertama
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(false);
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-base font-bold mb-2">{item.title}</h3>

          <div className="flex items-center text-xs mb-1">
            <Calendar className="w-3 h-3 mr-1" />
            <span>
              {item.tanggal} • {item.waktu}
            </span>
          </div>

          <div className="flex items-center text-xs mb-1">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{item.lokasi}</span>
          </div>

          <p className="text-xs text-gray-200 leading-relaxed line-clamp-2">
            {item.deskripsi}
          </p>
        </div>
      </div>
    </div>
  );
};

// Gallery Grid Component
const GalleryGrid = ({ data }: { data: GalleryItemType[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-2">
      {data.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

// Loading fallback untuk Suspense
const GalleryLoadingFallback = () => {
  const skeletonItems = Array.from({ length: 9 }, (_, i) => {
    const orientations = [
      "landscape-wide",
      "portrait",
      "portrait-tall",
      "square",
      "landscape",
    ];
    return {
      id: i,
      orientation: orientations[i % orientations.length],
    };
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-2">
      {skeletonItems.map((item) => (
        <GalleryItemSkeleton key={item.id} orientation={item.orientation} />
      ))}
    </div>
  );
};

const MasonryGallery = () => {
  // Sample data dengan berbagai orientasi
  const galleryData = [
    {
      id: 1,
      image: "/poslitkes.jpeg",
      orientation: "landscape",
      title: "Kegiatan Sosialisasi Program",
      waktu: "08:30 WIB",
      tanggal: "15 Juli 2025",
      lokasi: "Pantai Teluk Jakarta",
      deskripsi:
        "Sosialisasi program pengembangan masyarakat pesisir dengan melibatkan seluruh stakeholder",
    },
    {
      id: 2,
      image: "/jalan.jpg",
      orientation: "portrait",
      title: "Monitoring Ekosistem Laut",
      waktu: "06:00 WIB",
      tanggal: "18 Juli 2025",
      lokasi: "Perairan Kepulauan Seribu",
      deskripsi:
        "Kegiatan monitoring kondisi ekosistem laut dan terumbu karang",
    },
    {
      id: 3,
      image: "/pos123.jfif",
      orientation: "landscape-wide",
      title: "Pelatihan Masyarakat Pesisir",
      waktu: "14:00 WIB",
      tanggal: "20 Juli 2025",
      lokasi: "Pantai Ancol",
      deskripsi: "Pelatihan keterampilan budidaya dan pengolahan hasil laut",
    },
    {
      id: 4,
      image: "/api/placeholder/400/500",
      orientation: "portrait",
      title: "Workshop Konservasi",
      waktu: "09:15 WIB",
      tanggal: "22 Juli 2025",
      lokasi: "Balai Desa Pulau Pari",
      deskripsi: "Workshop edukasi konservasi lingkungan laut",
    },
    {
      id: 5,
      image: "/api/placeholder/500/300",
      orientation: "landscape",
      title: "Survei Lapangan",
      waktu: "07:45 WIB",
      tanggal: "25 Juli 2025",
      lokasi: "Pulau Tidung",
      deskripsi: "Survei kondisi lapangan untuk perencanaan program",
    },
    {
      id: 6,
      image: "/api/placeholder/400/400",
      orientation: "square",
      title: "Evaluasi Program",
      waktu: "13:30 WIB",
      tanggal: "28 Juli 2025",
      lokasi: "Pantai Marina",
      deskripsi: "Evaluasi hasil pelaksanaan program",
    },
    {
      id: 7,
      image: "/api/placeholder/600/450",
      orientation: "landscape",
      title: "Diskusi Kelompok",
      waktu: "10:00 WIB",
      tanggal: "30 Juli 2025",
      lokasi: "Aula Desa",
      deskripsi: "Diskusi kelompok untuk evaluasi program",
    },
    {
      id: 8,
      image: "/api/placeholder/350/600",
      orientation: "portrait-tall",
      title: "Dokumentasi Peserta",
      waktu: "15:45 WIB",
      tanggal: "02 Agustus 2025",
      lokasi: "Pantai Karimunjawa",
      deskripsi: "Dokumentasi kegiatan bersama peserta program",
    },
    {
      id: 9,
      image: "/api/placeholder/500/350",
      orientation: "landscape-wide",
      title: "Pemantauan Hasil",
      waktu: "11:20 WIB",
      tanggal: "05 Agustus 2025",
      lokasi: "Dermaga Nelayan",
      deskripsi: "Pemantauan hasil implementasi program",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Hero
        title="Gallery Dokumentasi Kegiatan Poslitkes"
        image="/jalan.jpg"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
        {/* Masonry Grid dengan Suspense */}
        <Suspense fallback={<GalleryLoadingFallback />}>
          <GalleryGrid data={galleryData} />
        </Suspense>
      </div>
    </div>
  );
};

export default MasonryGallery;
