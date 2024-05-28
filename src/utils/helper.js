import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaHouse,
  FaRenren,
  FaUser,
  FaDiscord,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  BoogaGame,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "https://www.facebook.com",
    color: "#1877F2",
  },
  {
    id: `Twitter-${Date.now()}`,
    Icon: FaTwitter,
    uri: "https://twitter.com",
    color: "#0072b1",
  },
  {
    id: `discord-${Date.now()}`,
    Icon: FaDiscord,
    uri: "https://discordapp.com/users/1007855573213126756",
    color: "#fff",
  },
  {
    id: `Whatsapp-${Date.now()}`,
    Icon: FaTelegram,
    uri: "https://wa.me/message/FQ53HO3DD2B6M1",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Hospital Tycoon",
    imgSrc: RestaurantClone,
    discordURL: "https://discordapp.com/users/1007855573213126756",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Milk Tycoon",
    imgSrc: CodePenClone,
    discordURL: "https://discordapp.com/users/1007855573213126756",
  },
  {
    id: `openai-${Date.now()}`,
    name: "Shooting Game",
    imgSrc: OpenAI,
    discordURL: "https://discordapp.com/users/1007855573213126756",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Education Child Game",
    imgSrc: ChatApp,
    discordURL: "https://discordapp.com/users/1007855573213126756",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Cooming Soon Project",
    imgSrc: ImageSharing,
    discordURL: "https://discordapp.com/users/1007855573213126756",
  },
  {
    id: `BoogaGame-${Date.now()}`,
    name: "Booga Booga Game",
    imgSrc: BoogaGame,
    discordURL: "https://discordapp.com/users/1007855573213126756",
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "Fresh Juice Map",
    imgSrc: FreshJuiceUI,
    discordURL: "https://discordapp.com/users/1007855573213126756",
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Social Media App",
    imgSrc: SocialMedia,
    discordURL: "https://discordapp.com/users/1007855573213126756",
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Fireabse",
    imgSrc: PortfolioFirebase,
    discordURL: "https://discordapp.com/users/1007855573213126756",
  },
];
