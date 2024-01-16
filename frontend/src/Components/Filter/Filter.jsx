import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterNotes } from "../../redux/actions";

export default function Filter() {
  const [filterObj, setFilterObj] = useState({
    active: "all",
    archived: "all",
  });
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);

  useEffect(() => {
    dispatch(filterNotes(filterObj, userId));
  }, [filterObj]);

  const handleFilter = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFilterObj({ ...filterObj, [field]: value });
  };

  return (
    <div
      className="w-[90%] flex h-[50px] mx-auto mb-4 justify-around items-center text-indigo-100"
      onChange={handleFilter}
    >
      <span className="ml-40">Filters</span>
      <div className="flex flex-col">
        <label htmlFor="active">Active/Inactive</label>
        <select name="active" id="active" className="text-gray-800 text-sm">
          <option value="all">All</option>
          <option value="true">Active Only</option>
          <option value="false">Inactive Only</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="archived">Archived</label>
        <select
          name="archived"
          id="archived"
          className="text-gray-800 text-sm"
          onChange={handleFilter}
        >
          <option value="all">All</option>
          <option value="true">Archived Only</option>
          <option value="false">Unarchivedr Only</option>
        </select>
      </div>
    </div>
  );
}
