import Copyright from "./Copyright";
import CliconEcommerce from "./CliconEcommerce";
import TopCategory from "./TopCategory";
import QuickLink from "./QuickLink";
import DownloadApp from "./DownloadApp";
import PopularTags from "./PopularTags";


const FooterComponent = () => {
  return (
    <div className="max-w-[100vw] w-full bg-greyBlack text-white pt-[10vh] text-[5px]">
      <div className="flex justify-between items-start px-[10vw]">
        <CliconEcommerce />
        <TopCategory />
        <QuickLink />
        <DownloadApp />
        <PopularTags/>
      </div>

      <Copyright />
    </div>
  );
};

export default FooterComponent;
