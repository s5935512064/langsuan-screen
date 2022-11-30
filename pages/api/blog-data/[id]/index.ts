import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

const blog_data = [
  {
    id: 1,
    ssd_id: "SDR",
    name: "Sindhorn Residence",
    detail: "",
    color: "",
    src_qr: "",
    highlight: [{ id: 1, type: "PH", plan_src: "" }],
    gallery: null,
  },
  {
    id: 2,
    ssd_id: "BSD",
    name: "Baan Sindhorn",
    detail:
      "Welcome to BAAN SINDHORN. Our residence offers a new urban living phenomenon that every family is looking for. This project is situated in a prime location right in heart of Bangkok, with only 32 exquisite units, 2-bedroom or Penthouse, on offer.",
    color: "",
    src_qr: "",
    highlight: [{ id: 1, type: "PH", plan_src: "" }],
    gallery: null,
  },
  {
    id: 3,
    ssd_id: "SDK",
    name: "The Residences at Sindhorn Kempinski Hotel Bangkok",
    detail: "",
    color: "",
    src_qr: "",
    highlight: [{ id: 1, type: "PH", plan_src: "" }],
    gallery: null,
  },
  {
    id: 4,
    ssd_id: "SDT",
    name: "Sindhorn Tonson",
    detail:
      "Sindhorn Tonsonis an integral part of the ambitious Sindhorn Village development , which aims to set a new standard of excellence for quality living in the heart of Bangkok, along charismatic Langsuan Road. Combining environmentally-friendly, peaceful, and green vicinities with high-quality amenities for unique cosmopolitan living. Sindhorn Village is writing a new chapter in ideal urban living.",
    color: "",
    src_qr: "",
    highlight: [{ id: 1, type: "PH", plan_src: "" }],
    gallery: null,
  },
  {
    id: 5,
    ssd_id: "SDL",
    name: "Sindhorn Lumpini",
    detail: "",
    color: "",
    src_qr: "",
    highlight: [{ id: 1, type: "PH", plan_src: "" }],
    gallery: null,
  },
  {
    id: 6,
    ssd_id: "KIMTON",
    name: "Kimpton Maa-Lai Bangkok Hotel",
    detail:
      "The leading boutique hotel located in the heart of the Langsuan. Kimpton Bangkok Langsuan believes in heartfelt human connections is enchanted guests by superlative service that bring meaningful, unforgettable and unscripted personal experiences.  349 guest rooms",
    color: "",
    src_qr: "",
    highlight: [{ id: 1, type: "PH", plan_src: "" }],
    gallery: null,
  },
  {
    id: 7,
    ssd_id: "KIMPIN",
    name: "Sindhorn Kempinski Hotel Bangkok",
    detail:
      "Sindhorn Kempinski Hotel Bangkok provides a new perspective of Bangkok. It’s the perfect place for visitors who are looking to experience uniquely luxurious lifestyle, and space for a peace of mind. Connected to nature and the city at the same time, the best of both worlds. 280 guest rooms",
    color: "",
    src_qr: "",
    highlight: [{ id: 1, type: "PH", plan_src: "" }],
    gallery: null,
  },
  {
    id: 8,
    ssd_id: "MIDTOWN",
    name: "Sindhorn Midtown Hotel Bangkok,Vignette Collection",
    detail:
      "Providing value and comfort, infused with a distinctive Thai hospitality to present day travelers The hotel s focus is offering the guests warm, genuine and quality service",
    color: "",
    src_qr: "",
    highlight: [{ id: 1, type: "PH", plan_src: "" }],
    gallery: null,
  },
  {
    id: 9,
    ssd_id: "VELAA",
    name: "Velaa Langsuan",
    detail:
      "Take a short stroll down happiness lane, to a supermarket, a variety of shops, food and beverages, restaurants and services, all handpicked for your enjoyment.",
    color: "",
    src_qr: "",
    highlight: null,
    gallery: [
      { id: 1, src: "/assets/velaa/gallery_2612_20201201172355.jpg", type: "" },
      { id: 2, src: "/assets/velaa/gallery_3034_20201201172355.jpg", type: "" },
      { id: 3, src: "/assets/velaa/gallery_4470_20210615021808.jpg", type: "" },
      { id: 4, src: "/assets/velaa/gallery_5224_20201201172355.jpg", type: "" },
      { id: 5, src: "/assets/velaa/gallery_5262_20201201172355.jpg", type: "" },
      { id: 6, src: "/assets/velaa/gallery_5329_20201201172355.jpg", type: "" },
      { id: 7, src: "/assets/velaa/gallery_5890_20201201172355.jpg", type: "" },
      { id: 8, src: "/assets/velaa/gallery_6270_20201201172355.jpg", type: "" },
      { id: 9, src: "/assets/velaa/gallery_6709_20201201172355.jpg", type: "" },
      {
        id: 10,
        src: "/assets/velaa/gallery_7128_20210615021817.jpg",
        type: "",
      },
      {
        id: 11,
        src: "/assets/velaa/gallery_7310_20201201172355.jpg",
        type: "",
      },
      {
        id: 12,
        src: "/assets/velaa/gallery_7918_20201201172355.jpg",
        type: "",
      },
      {
        id: 13,
        src: "/assets/velaa/gallery_8245_20201201172355.jpg",
        type: "",
      },
      {
        id: 14,
        src: "/assets/velaa/gallery_8811_20201201172355.jpg",
        type: "",
      },
      {
        id: 15,
        src: "/assets/velaa/gallery_9195_20201201172355.jpg",
        type: "",
      },
    ],
  },
  {
    id: 10,
    ssd_id: "SDB",
    name: "Sindhorn Building Office",
    detail: "",
    color: "",
    src_qr: "",
    highlight: [{ id: 1, type: "PH", plan_src: "" }],
    gallery: null,
  },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { id },
    method,
  } = req;

  const movie_id = parseInt(id as string, 10);

  const payload = blog_data.filter((p) => p.ssd_id == id);

  const { title } = req.body;

  switch (method) {
    case "GET":
      res.status(200).json(payload[0]);
      break;
    case "PUT":
      res.status(200).json({ id, title: title || `Post #${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
