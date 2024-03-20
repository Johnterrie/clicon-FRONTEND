import BlackFriday from "./BlackFriday"
import Discount from "./Discount"
import ShopNow from "./ShopNow"



const AdvertNavBar = () => {
  return (
    <div className="pl-[10vw] pr-[10vw] bg-black text-white flex justify-between items-center text-[11px] h-[25px]">
      <BlackFriday/>
      <Discount/>
      <ShopNow/>
    </div>
  )
}

export default AdvertNavBar
