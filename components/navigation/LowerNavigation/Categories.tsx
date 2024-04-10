import CategoriesIcon from "./data";
import Icon from "../../icon";

const Categories = () => {
  return (
    <div className="h-[8vh] flex justify-between items-center w-[45vw] relative">
      <span className="text-[6px] rounded-[2px] bg-categoryGrey px-[10px] py-[4px]">
        All Categories
      </span>
      {CategoriesIcon.map((data) => {
        return (
          <div
            key={data.id}
            className="flex justify-center items-center  text-[5px] relative"
          >
            <Icon
              alt={data.alt}
              src={data.src}
              width={data.width}
              height={data.height}
            />
            <span>{data.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
