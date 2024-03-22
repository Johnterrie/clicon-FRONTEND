import Icon from "../navigation/icon"
import { DownloadLinks } from "./data"


const DownloadApp = () => {
  return (
    <div>
      <div className="font-bold text-[10px]">DOWNLOAD APP</div>
      <div>
        {
            DownloadLinks.map((data) => {
                return(
                    <div className=" bg-downloadGrey w-[10vw] h-[10vh] text-[5px] flex items-center justify-between mb-[5px]" key={data.id}>
                        <Icon src={data.src} width={8} alt={data.alt} height={8}/>
                        <div>
                            <div>{data.action}</div>
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
