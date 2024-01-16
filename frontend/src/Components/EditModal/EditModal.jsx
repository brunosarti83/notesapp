/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { editNoteAction } from "../../redux/actions";

export default function EditModal({ onClose, id, title, description }) {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: title,
    description: description,
  });

  const onChange = (e) => {
    const noteCopy = { ...note };
    noteCopy[e.target.name] = e.target.value;
    setNote({ ...noteCopy });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(editNoteAction(id, note));
      toast.success("Note edited successfully");
      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const disabledButton = !note.title || !note.description;

  return (
    <div className="w-full h-full m-4 border-white border-[2px] p-4 pt-6 rounded-[2px]">
      <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <div className="mx-auto flex flex-col">
          <label className="text-indigo-200">Title:</label>
          <input
            name="title"
            value={note.title}
            className="w-[14ch] rounded-[2px] px-2 py-[1px] font-sonsie text-xl text-orange-400 bg-slate-600"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="mx-auto flex flex-col">
          <label className="text-indigo-200">Description:</label>
          <textarea
            name="description"
            value={note.description}
            className="w-[30ch] rounded-[2px] px-2 py-[1px] min-h-[100px] bg-slate-600 text-indigo-100"
            type="textarea"
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          disabled={disabledButton}
          className="mx-auto w-1/3 px-4 py-2 bg-orange-400 text-white rounded-[4px] disabled:opacity-50 mb-6"
        >
          Save
        </button>
      </form>
    </div>
  );
}
