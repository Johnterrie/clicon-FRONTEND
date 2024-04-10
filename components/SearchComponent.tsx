import { SearchProps } from "@/types";
import { Input } from "@/components/ui/input"


const SearchComponent: React.FC<SearchProps> = ({ className, placeholder }) => {
  return (
    <div>
      <Input className={className} placeholder={placeholder} />
    </div>
  );
};

export default SearchComponent;
