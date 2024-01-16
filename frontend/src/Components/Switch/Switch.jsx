/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { switchActive } from "../../redux/actions";

export default function Switch({ id, active, setIsActive }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(switchActive(id, !active));
    setIsActive((previous) => !previous);
  };

  return (
    <div
      className={
        "w-[40px] h-[20px] rounded-[10px] bg-slate-900 flex px-[1px] hover:cursor-pointer transition-all duration-400" +
        ` ${active ? "bg-green-600" : "bg-rose-600"}`
      }
      onClick={onClick}
    >
      <div
        className={
          "h-[20px] w-[20px] rounded-full bg-slate-700 shadow-inner shadow-[rgb(125,125,125)] m-auto transition-all duration-400" +
          ` ${active ? "-translate-x-2" : "translate-x-2"}`
        }
      ></div>
    </div>
  );
}
