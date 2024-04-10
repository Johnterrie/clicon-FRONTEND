import SearchComponent from "../SearchComponent"
import Icon from "../icon"
import { NewsLetterData } from "./data"

const NewsLetterComponent = () => {
  return (
    <div className='h-[60vh] w-full bg-NavBlue flex text-white flex-col justify-center items-center'>
        <div className='font-semibold text-[13px]' >Subscribe to our newsletter</div>
        <div className='text-[5px] w-2/5 text-center'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</div>
            <div className="relative flex  ">
                <SearchComponent className="w-[45vw] h-[10vh] mt-[5vh] rounded-[1px] text-[6px]" placeholder="Email Address"/>
                <div className="flex absolute right-1 top-[6.5vh] bg-mainYellow text-[8px] h-[7vh] w-[30vh] rounded-[2px] justify-center items-center  ">
                    <span className="mr-[2px]">Subscribe </span>
                    <Icon src="/ArrowRight.png" width={8} alt="Arrow Right" height={4}/>
                </div>
            </div>


        <div className="w-[40vw] h-[10vh] flex justify-between items-center mt-[4vh] ">
            {
                NewsLetterData.map((data) => {
                    return (
                        <Icon key={data.id} src={data.name} alt="" width={20} height={6}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NewsLetterComponent
