import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Itap: El nuevo ecosistema técnologico para tu Bar ",
    paragraph:
      "iTap es un servicio innovador que permite el autoservicio de cerveza de forma autónoma en bares y eventos.",
    image: "/images/blog/itap.svg",
    author: {
      name: "Macol Burna",
      image: "/images/blog/author-01.png",
      designation: "Ingeniero, M.Sc. en IoT",
    },
    tags: ["IoT"],
    publishDate: "11/06/2024",
  },
  /*{
    id: 2,
    title: "Chatbotear: Como automatizar las ventas y control de stock en tu negocio",
    paragraph:
      "Chatbotear es un servicio que permite automatizar el proceso de consulta, venta y status de los productos de tu negocio",
    image: "/images/blog/chatbotear.svg",
    author: {
      name: "Mariano Dambolena",
      image: "/images/blog/author-02.png",
      designation: "Ingeniero en Sistemas",
    },
    tags: ["Inteligencia Artificial"],
    publishDate: "15/06/2024",
  },*/
  /*{
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },*/
];
export default blogData;
