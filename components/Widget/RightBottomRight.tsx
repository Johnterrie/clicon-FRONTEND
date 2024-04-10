import Icon from "../icon";

const RightBottomRight = () => {
  return (
    <div className="w-[50%] flex flex-col justify-between py-[5vh]">
      
          <div className="text-[6px] text-black font-bold w-3/5">
            Xiaomi FlipBuds Pro
          </div>
        
          <div className="text-[3.5px] text-widgetBlue">$299 USD</div>
        
        <div className="flex w-4/5 h-5 items-center rounded-[2px] justify-center bg-mainYellow text-white">
          <span className="mr-[3px] text-[4px]">SHOP NOW </span>
          <Icon src="/ArrowRight.png" alt="Arrow Right" width={3} height={0} />
        </div>
    </div>
  );
};

export default RightBottomRight;
