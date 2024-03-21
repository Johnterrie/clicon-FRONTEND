import TopNavigation from "./TopNavigation"
import AdvertNavBar from "./AdvertNavigation"
import MiddleNavBar from "./MiddleNavigation"
import LowerNavigation from "./LowerNavigation"

const NavigationBar = () => {
  return (
   <main className="">
    <AdvertNavBar/>
    <TopNavigation/>
    <MiddleNavBar/>
    <LowerNavigation/>
   </main> 
  )
}

export default NavigationBar
