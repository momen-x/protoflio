// app/data/Experience.ts
interface IExperience {
  title: string; // This will be translation keys
  path: string;
  iconBg: string;
  date: string; // This will be translation keys
  points: string[]; // These will be translation keys
}

const myExperience: IExperience[] = [
  {
    date: "experience.frontDate",
    title: "experience.frontTitle",
    path: "/images/react.png",
    iconBg: "#000",
    points: ["experience.front1", "experience.front2", "experience.front3"],
  },
  {
    date: "experience.BackDate",
    title: "experience.BackTitle",
    path: "/images/Next.jpg",
    iconBg: "#000",
    points: [
      "experience.back1",
      "experience.back2",
      "experience.back3",
      "experience.back4",
    ],
  },
];

export default myExperience;
