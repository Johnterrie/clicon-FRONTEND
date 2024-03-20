import Socials from "./Socials"
import Welcome from "./welcome"


const TopNavigation = () => {
  return (
    <div className="border border-black bg-NavBlue text-white flex justify-between items-center h-[20px] pl-[10vw] pr-[10vw]">
     <Welcome/>
     <Socials/>
    </div>
  )
}

export default TopNavigation
