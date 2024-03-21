import Categories from "./Categories"
import Telephone from "./Telephone"


const LowerNavigation = () => {
  return (
    <div className="px-[10vw] flex justify-between h-[10vh] items-center">
      <Categories/>
      <Telephone/>
    </div>
  )
}

export default LowerNavigation
