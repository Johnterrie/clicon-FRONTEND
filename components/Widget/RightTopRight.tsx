import Image from "next/image"

const RightTopRight = () => {
  return (
    <div className="flex flex-col justify-between overflow-hidden items-center mt-[4vh] relative h-full">
        <span className="text-[5px] w-[7vw] text-center bg-AdsYellow z-50 text-white py-[2px]">29% OFF</span>
        <Image className="relative top-[-9.9px] " src="/PhoneImage.png" alt="Phone Image" width={70} height={200}/>
    </div>
  )
}

export default RightTopRight
