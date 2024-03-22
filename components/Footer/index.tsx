import Copyright from "./Copyright";
import CliconEcommerce from "./CliconEcommerce";
import TopCategory from "./TopCategory";
import QuickLink from "./QuickLink";
import DownloadApp from "./DownloadApp";

const FooterComponent = () => {
  return (
    <div className="w-screen bg-greyBlack text-white pt-[10vh]">
      <div className="flex justify-between items-start px-[10vw]">
        <CliconEcommerce />
        <TopCategory />
        <QuickLink />
        <DownloadApp />
      </div>

      <Copyright />
    </div>
  );
};

export default FooterComponent;
