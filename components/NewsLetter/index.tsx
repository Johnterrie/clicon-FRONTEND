import SearchComponent from "../SearchComponent"
import Icon from "../icon"

const NewsLetterComponent = () => {
  return (
    <div className='h-[60vh] w-full bg-NavBlue flex text-white flex-col justify-center items-center'>
        <div className='font-semibold text-[13px]' >Subscribe to our newsletter</div>
        <div className='text-[5px] w-2/5 text-center'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</div>
        <SearchComponent className="w-[45vw] h-[10vh] mt-[5vh] rounded-[1px] text-[6px]" placeholder="Email Address"/>


        <div className="w-[40vw] h-[10vh] border border-red-100 mt-[4vh] ">
            <Icon src="/Frame.png" alt="" width={20} height={6}/>
        </div>
    </div>
  )
}

export default NewsLetterComponent
