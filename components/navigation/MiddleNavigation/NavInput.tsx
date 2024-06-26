import SearchComponent from "@/components/SearchComponent"

import Image from "next/image"


const NavInput = () => {
  return (
    <div className="w-[33vw] flex text-white relative">
        <SearchComponent className="text-[5px] h-[7px] rounded-[1px] w-[33svw]" placeholder="Search for anything......."/>
        <Image className=" absolute right-[1.5vw] top-[1.2vw]" src="/MagnifyingGlass.png" alt="Search" width={5} height={5} />
    </div>
  )
}

export default NavInput
