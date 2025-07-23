"use client";
import React, { Suspense, useState } from "react";
import Image from "next/image";
import { MapPin, Users } from "lucide-react";
import Hero from "@/components/Hero";
import { galleryData, type GalleryItemType } from "@/app/data/galleryData";

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
          alt="Dokumentasi Poslitkes"
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          priority={item.id <= 4}
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
          <div className="flex items-center text-xs mb-1">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{item.lokasi}</span>
          </div>

          <div className="flex items-center text-xs mb-2">
            <Users className="w-3 h-3 mr-1" />
            <span>Kelompok {item.kelompok}</span>
          </div>
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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Hero
        title="Gallery Dokumentasi Kegiatan Poslitkes"
        image="/penerjunan_kkn.jpg"
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
