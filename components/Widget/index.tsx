import RightBottomLeft from "./RightBottomLeft";
import RightBottomRight from "./RightBottomRight";
import RightTop from "./RightTopLeft";
import RightTopRight from "./RightTopRight";
import MainComponent from "./main";

const WidgetComponent = () => {
  return (
    <div className="mx-[10vw] h-[65vh] flex justify-between relative">
      <MainComponent />

      <div className="w-[30%] flex flex-col justify-between items-center relative">
        <div className="bg-downloadGrey flex w-full h-[46%] rounded-[2px] relative">
            <RightTop/>
            <RightTopRight/>
        </div>

        <div className="bg-categoryGrey w-full h-[48%] rounded-[2px] flex">
          <RightBottomLeft/>
          <RightBottomRight/>
        </div>
      </div>
    </div>
  );
};

export default WidgetComponent;
