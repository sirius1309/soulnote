import "./AddButton.css";
import { IoAdd } from "react-icons/io5";

const AddButton = () => {
  return (
    <div className="add-button-wrap">
      <button><IoAdd className="plus-icon" /></button>
    </div>
  )
}

export default AddButton;
