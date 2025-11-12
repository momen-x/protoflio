
import { technologies } from "@/app/data/technologies";
import BallCanvas from "./BallCanvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas path={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
