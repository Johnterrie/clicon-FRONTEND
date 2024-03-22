import Icon from "../navigation/icon";
import Image from "next/image";
import { TopCategoryLinks } from "./data";
import { AccessoriesLinks } from "./data";

const TopCategory = () => {
  return (
    <div className="">
      <div className="font-bold text-[10px]">TOP CATEGORY</div>
      {TopCategoryLinks.map((data) => {
        return (
          <div className="text-[6px] mb-[3px]" key={data.id}>
            {data.name}
          </div>
        );
      })}
      <div className="flex justify-start items-center">
        <Icon src="/Devider.png" alt="dash" width={12} height={2} />
        <span className="text-[9px] font-bold ml-[2px]">Accessories</span>
      </div>
      {AccessoriesLinks.map((data) => {
        return (
          <div className="text-[6px] mb-[3px]" key={data.id}>
            {data.name}
          </div>
        );
      })}
      <div className="flex justify-start items-center">
        <span className="text-[6px] justify-start items-center text-AdsYellow flex h-[6vh] mr-[2px]">
          Browse all product
        </span>
        <Image className="pt-[0.5px]"  src="/ArrowRightYellow.png" alt="dash" width={7} height={0} />
      </div>
    </div>
  );
};

export default TopCategory;
