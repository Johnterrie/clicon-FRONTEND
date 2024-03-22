import Copyright from "./Copyright"
import CliconEcommerce from "./CliconEcommerce"
import TopCategory from "./TopCategory"



const FooterComponent = () => {
  return (
    <div className='w-screen bg-greyBlack text-white pt-[10vh]'>
      <div className="flex border border-white justify-between items-center">
      <CliconEcommerce/>
      <TopCategory/>
      </div>

      <Copyright/>
    </div>
  )
}

export default FooterComponent
