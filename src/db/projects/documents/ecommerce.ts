import { PortfolioProject } from "../projects";

export const ecommerce: PortfolioProject = {
  id: "ecommerce",
  name: "My Ecommerce app",
  label: "frontend",
  feature: true,
  position: 3,
  primaryImage: {
    id: 1,
    url: "https://res.cloudinary.com/djwbvzp5w/image/upload/v1692972168/ecom_vzcjrl.png",
  },
  domainName: "Ecommerce-app",
  url: "",
  metaDescription:
    "A mock online store for purchasing furniture of all sorts. Login with your email and password, choose the products you want to buy and add them to your cart. View and edit your cart as you like.",
  description:
    "Welcome to our virtual furniture haven, your go-to mock online store for all things furniture. Dive into a seamless shopping experience: log in with your email and password, explore a diverse range of products, and effortlessly build your dream space. Discover an array of styles, from timeless classics to modern marvels. Browse sofas designed for comfort, chairs that blend style with function, and tables that redefine your space. With just a few clicks, add items to your cart and watch your vision come to life.",
  technologies: [
    {
      id: 1,
      name: "React.js",
      url: "https://reactjs.org",
    },
    {
      id: 2,
      name: "Firebase",
      url: "https://firebase.google.com/",
    },
    {
      id: 3,
      name: "Redux",
      url: "https://redux.js.org/",
    },
  ],
  durationOfCompletion: "July 2023 - Present",
  myRole:
    "As the Front End Developer behind this project, I've brought the virtual furniture store to life. I've crafted the user interface, turning designs into seamless interactions. From login to product exploration and cart management, I've woven HTML, CSS, and JavaScript to ensure a smooth experience. It's my code that enables easy navigation and an engaging journey, making furniture shopping a breeze for every user",
  productsDeveloped: ["Ecommerce Web Application"],
  snapshots: [
    {
      name: "Ecommerce Checkout-page",
      id: 3,
      url: "https://res.cloudinary.com/djwbvzp5w/image/upload/v1692972154/Screenshot_2023-08-25_at_3.00.11_PM_qauumr.png",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/djwbvzp5w/image/upload/v1692972149/Screenshot_2023-08-25_at_3.00.48_PM_slrgwt.png",
      name: "Ecommerce signup Page",
    },
  ],
  theme: "#e5ba82",
};
