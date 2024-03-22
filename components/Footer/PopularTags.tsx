import { PopularTagsLinks } from "./data";

const PopularTags = () => {
  return (
    <div className="w-[25vw]">
      <div className="font-bold text-[6px] mb-[10px]">POPULAR TAGS</div>
      <div className="flex flex-wrap">
        {PopularTagsLinks.map((data) => {
          return <div className="rounded-[2px] border-[0.1px] border-categoryGrey mr-[4px] mb-[5px] px-[6px] py-[4px]" key={data.id}>{data.name}</div>;
        })}
      </div>
    </div>
  );
};

export default PopularTags;
