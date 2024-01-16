import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../../redux/actions";
import Note from "../Note/Note";

export default function Notes() {
  const userId = useSelector((state) => state.userId);
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserNotes(userId));
  }, [userId]);

  return (
    <div className="w-full p-8 flex flex-wrap items-center justify-center gap-4">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          active={note.active}
          archived={note.archived}
        />
      ))}
    </div>
  );
}
