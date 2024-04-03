import Icon from "../navigation/icon"



const WidgetComponent = () => {
  return (
    <div className='mx-[10vw] h-[50vh] flex justify-between relative'>
        <div className='w-[68%] bg-categoryGrey rounded-[2px] flex '>
            <div className='w-[50%] text-[5px] py-[10vh] pl-[5vw]'>
                <div className="flex text-widgetBlue font-medium"> <span>THE BEST PLACE TO PLAY</span></div>
                <div className="text-[10px] font-bold">Xbox Consoles</div>
                <div className="w-[80%] mb-[5px]">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</div>
                <div className="flex w-2/4 h-5 items-center rounded-[2px] justify-center bg-mainYellow text-white"> <span className="mr-[3px]">
                    SHOP NOW    </span>
                    <Icon src="/ArrowRight.png" alt="Arrow Right" width={5} height={0}/> </div>
            </div>
            <div className='w-[50%] flex justify-start items-center relative'>
                <Icon src="/Image.png" alt="Play Station" width={80} height={80}/>
                <div className="border-white border-[1px] rounded-[50%] h-[15vh] w-[15vh] text-[8px] text-white bg-widgetBlue flex items-center justify-center absolute top-[4vh] right-[8vw]">$299</div>
            </div>
        </div>
        <div className='w-[30%] border border-green-500'>right</div>


    </div>
  )
}

export default WidgetComponent
