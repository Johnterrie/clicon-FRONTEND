import Icon from "../navigation/icon"



const WidgetComponent = () => {
  return (
    <div className='mx-[10vw] h-[50vh] flex justify-between'>
        <div className='w-[68%] bg-categoryGrey rounded-[2px] flex '>
            <div className='border w-[50%] border-red-300 text-[5px] py-[10vh] px-[2vw]'>
                <div>THE BEST PLACE TO PLAY</div>
                <div>Xbox Console</div>
                <div>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</div>
                <div>SHOP NOW <Icon src="/ArrowRight.png" alt="Arrow Right" width={5} height={5}/> </div>
            </div>
            <div className='border w-[50%] border-yellow-300'>right</div>
        </div>
        <div className='w-[30%] border border-green-500'>right</div>


    </div>
  )
}

export default WidgetComponent
