import { QuickLinks } from "./data";

const QuickLink = () => {
  return (
    <div>
        <div className="font-bold text-[6px] mb-[10px]">QUICK LINKS</div>
      {QuickLinks.map((data) => {
        return (
          <div className="text-[5px] mb-[3px]" key={data.id}>
            {data.name}
          </div>
        );
      })}
    </div>
  )
}

export default QuickLink
