import Icon from "../icon"
import { DownloadLinks } from "./data"


const DownloadApp = () => {
  return (
    <div>
      <div className="font-bold text-[6px] mb-[10px]">DOWNLOAD APP</div>
      <div>
        {
            DownloadLinks.map((data) => {
                return(
                    <div className=" bg-downloadGrey w-[10vw] h-[10vh] text-[5px] flex items-center mb-[5px] px-[6px] rounded-[2px]" key={data.id}>
                        <Icon src={data.src} width={8} alt={data.alt} height={8}/>
                        <div className="flex flex-col items-start justify-start ml-[6px]">
                            <div className="text-[3px]">{data.action}</div>
                            <div>{data.name}</div>
                        </div>
                    </div>
                )
            })
        }
      </div>



    </div>
  )
}

export default DownloadApp
