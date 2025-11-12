// app/data/Services.ts
import { MdWeb } from "react-icons/md";
import { BsDatabaseAdd } from "react-icons/bs";
import { IconType } from "react-icons";

interface IServices {
  title: string; 
  Icon: IconType;
}

const services: IServices[] = [
  {
    Icon: MdWeb,
    title: "about.serviceTitle1", 
  },
  {
    Icon: BsDatabaseAdd,
    title: "about.serviceTitle2",
  },
];

export default services;
