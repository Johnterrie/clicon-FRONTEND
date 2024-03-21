import TopNavigation from "./TopNavigation"
import AdvertNavBar from "./AdvertNavigation"
import MiddleNavBar from "./MiddleNavigation"

const NavigationBar = () => {
  return (
   <main className="">
    <AdvertNavBar/>
    <TopNavigation/>
    <MiddleNavBar/>
   </main> 
  )
}

export default NavigationBar
