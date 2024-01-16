/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { FaFolder } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { switchArchived } from "../../redux/actions";

export default function ArchiveButton({ id, archived, setIsArchived }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(switchArchived(id, !archived));
    setIsArchived((previous) => !previous);
  };

  return (
    <div
      className="text-[24px] text-slate-400 hover:cursor-pointer"
      onClick={onClick}
    >
      {archived ? <FaFolderOpen /> : <FaFolder />}
    </div>
  );
}
