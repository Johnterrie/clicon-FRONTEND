import Image from "next/image";
import { FeatureData } from "./data";

const FeatureComponent = () => {
  return (
    <div className="border-[0.4px] my-[4vh] mx-[10vw] h-[15vh] flex justify-between items-center text-[6px]  py-[2vh]">
      {FeatureData.map((data) => {
        return (
          <div key={data.id} className="flex border-r-[0.5px] h-full w-1/4 justify-center items-center">
            <Image src={data.src} width={data.width} alt="Apple" height={data.height} />
            <div className="ml-[5px]">
              <div className="font-semibold">{data.name}</div>
              <div className="text-[5px]">{data.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureComponent;
