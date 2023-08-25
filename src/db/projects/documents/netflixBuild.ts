import { PortfolioProject } from "../projects";

export const netflixBuild: PortfolioProject = {
  id: "netflix-clone",
  name: "Netflix Clone",
  label: "frontend",
  feature: true,
  position: 1,
  primaryImage: {
    id: 1,
    name: "Netflix Clone - Landing page",
    url: "https://res.cloudinary.com/djwbvzp5w/image/upload/v1692958731/tdgx0awkbcgqayts0fjy.png",
  },
  domainName: "Netflix Build",
  url: "https://nunu-codes-netflix-build.netlify.app/",
  metaDescription:
    "A web app for visualizing movie data. Login or Sign up and see a list of your top netflix orignal movies along with categories like action, romance documentaries and more. Choose a plan and make payments to subscribe.",
  description:
    "Unveil the world of cinematic insights through our web application designed to visualize movie data. After a quick login or signup, delve into a personalized collection of your favorite Netflix originals, neatly categorized into genres like action, romance, documentaries, and beyond. Select your preferred subscription plan, proceed with secure payments, and embark on a cinematic journey like never before.",
  technologies: [
    {
      id: 1,
      name: "Firebase",
      url: "https://firebase.google.com/",
    },
    {
      id: 2,
      name: "React.js",
      url: "https://reactjs.org",
    },
    {
      id: 3,
      name: "Redux",
      url: "https://redux.js.org/",
    },
  ],
  durationOfCompletion: "May 2023 - Present",
  myRole:
    "I meticulously crafted the user interface using cutting-edge technologies like React, ensuring a seamless and responsive experience across devices. Implementing dynamic data visualization, user authentication, and intuitive navigation.",
  productsDeveloped: ["Netflix Build Landingpage"],
  snapshots: [
    {
      id: 2,
      name: "Netflix Build - Signup page",
      url: "https://res.cloudinary.com/djwbvzp5w/image/upload/v1692958904/wjhvhku1hrzt4wd4fvgb.png",
    },
    {
      id: 3,
      name: "Netflix Build - Subscription page",
      url: "https://res.cloudinary.com/djwbvzp5w/image/upload/v1692958685/ojjzqcdjxkucqg6h5vru.png",
    },
  ],
  theme: "#220B1A",
};
