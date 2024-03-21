import IconBar from "./IconBar"
import NavInput from "./NavInput"
import NavProfile from "./Profile"

const MiddleNavBar = () => {
  return (
    <div className='bg-NavBlue px-[10vw] text-[10px] text-white h-[25px] flex justify-between items-center '>
        <IconBar/>
        <NavInput/>
        <NavProfile/>
    </div>
  )
}

export default MiddleNavBar
