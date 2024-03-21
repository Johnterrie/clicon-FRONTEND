import Socials from "./Socials"
import Welcome from "./welcome"


const TopNavigation = () => {
  return (
    <div className=" border-b-[0.2px] bg-NavBlue text-white flex justify-between items-center h-[17px] px-[10vw]">
     <Welcome/>
     <Socials/>
    </div>
  )
}

export default TopNavigation
