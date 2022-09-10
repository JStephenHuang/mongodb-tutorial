import { Link } from "react-router-dom";

interface DropdownMenuProperties {
  section: string;
}

const DropdownMenu = (props: DropdownMenuProperties) => {
  return (
    <div className="absolute flex flex-col border text-gray-600 bg-white font-medium">
      <Link to={`/${props.section}/create`} className="p-2 hover:text-blue-600">
        Create {props.section}
      </Link>
      <Link to={`/${props.section}/list`} className="p-2 hover:text-blue-600">
        View {props.section}
      </Link>
    </div>
  );
};

export default DropdownMenu;
