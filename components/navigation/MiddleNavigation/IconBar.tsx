import Icon from "../icon";


const IconBar = () => {
  return (
    <div className="flex h-[12px] w-[9vw] justify-between items-center">
      <Icon src="/Icon.png" width={10} alt="Logo Icon" height={5}/>
      <span>CLICON</span>
    </div>
  )
}

export default IconBar
