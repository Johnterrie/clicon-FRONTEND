import Icon from "../icon";

const RightTop = () => {
  return (
    <div className="flex flex-col justify-between w-[35%] mx-[2vw] my-[5vh]">
      <div>
        <div className="text-[3.5px] text-AdsYellow">SUMMER SALES</div>
        <div className="text-[6px] text-white font-bold">
          New Google Pixel 6 Pro
        </div>
      </div>
      <div className="flex w-full h-5 items-center rounded-[2px] justify-center bg-mainYellow text-white">
        <span className="mr-[3px] text-[4px]">SHOP NOW </span>
        <Icon src="/ArrowRight.png" alt="Arrow Right" width={5} height={0} />
      </div>
    </div>
  );
};

export default RightTop;
