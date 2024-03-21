import Socials from "./Socials"
import Welcome from "./welcome"


const TopNavigation = () => {
  return (
    <div className=" bg-NavBlue text-white flex justify-between items-center h-[20px] px-[10vw]">
     <Welcome/>
     <Socials/>
    </div>
  )
}

export default TopNavigation
