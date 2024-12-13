import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
function Icon(name) {
  if (name == "cross") {
    return <Fatimes />;
  } else if (name == "circle") {
    return <FaRegCircle />;
  } else {
    return <FaPen />;
  }
}
export default Icon;
