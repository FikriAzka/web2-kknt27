// /data/galleryData.ts

export type GalleryItemType = {
  id: number;
  image: string;
  tanggal: string;
  lokasi: string;
  kelompok: number;
  orientation?:
    | "landscape-wide"
    | "portrait"
    | "portrait-tall"
    | "square"
    | string;
};

export const galleryData: GalleryItemType[] = [
  {
    id: 1,
    image: "/poslitkes.jpeg",
    orientation: "landscape",
    tanggal: "15 Juli 2025",
    lokasi: "RT 4. RW 1",
    kelompok: 1,
  },
  {
    id: 2,
    image: "/21_6_25_Pelaksanaan poslitkes di RT 4 RW 2_Kelompok 2.jpeg",
    orientation: "portrait",
    tanggal: "21 Juni 2025",
    lokasi: "RT 4, RW 2",
    kelompok: 2,
  },
  {
    id: 3,
    image: "/6_7_25 Pelaksanaan Poslitkes RT 6 RW 4 - Kel 4.jpg",
    orientation: "square",
    tanggal: "6 Juli 2025",
    lokasi: "RT 6, RW 4",
    kelompok: 4,
  },
  {
    id: 4,
    image: "/27_06_2025_Pelaksanaan Poslitkes RT 4 RW 8_Kelompok 6.jpg",
    orientation: "landscape-wide",
    tanggal: "27 Juni 2025",
    lokasi: "RT 4, RW 8",
    kelompok: 6,
  },
  {
    id: 5,
    image:
      "/05_07_25_Mengikuti kegiatan PKK dan Pelaksaan kegiatan POSLITKES Lansia_Kelompok 3.jpg",
    orientation: "landscape",
    tanggal: "5 Juli 2025",
    lokasi: "RT 4, RW 8",
    kelompok: 3,
  },
  {
    id: 6,
    image: "/29_06_2025_Pelaksanaan Poslitkes RT 1 RW 8_Kelompok 6.jpg",
    orientation: "landscape-wide",
    tanggal: "29 Juni 2025",
    lokasi: "RT 1, RW 8",
    kelompok: 6,
  },
  {
    id: 7,
    image: "/28_06_2025_Pelaksanaan Poslitkes RT 5 RW 8_Kelompok 6.jpg",
    orientation: "potrait",
    tanggal: "28 Junii 2025",
    lokasi: "RT 5, RW 8",
    kelompok: 6,
  },
];
