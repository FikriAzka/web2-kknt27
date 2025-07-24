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
    image: "/lele.jpeg",
    orientation: "portrait-tall",
    tanggal: "15 Juli 2025",
    lokasi: "RT 4. RW 1",
    kelompok: 1,
  },
  {
    id: 2,
    image: "/garas_lele.jpeg",
    orientation: "portrait-wide",
    tanggal: "21 Juni 2025",
    lokasi: "RT 4, RW 2",
    kelompok: 2,
  },
  {
    id: 3,
    image: "/pian_lele.jpeg",
    orientation: "square",
    tanggal: "6 Juli 2025",
    lokasi: "RT 6, RW 4",
    kelompok: 4,
  },
  {
    id: 4,
    image: "/demo_baso.jpeg",
    orientation: "landscape-wide",
    tanggal: "27 Juni 2025",
    lokasi: "RT 4, RW 8",
    kelompok: 6,
  },
  {
    id: 5,
    image:
      "/pupuk.jpeg",
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
