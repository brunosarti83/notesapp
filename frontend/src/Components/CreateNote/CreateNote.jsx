import { useState } from "react";
import Modal from "react-modal";
import CreateModal from "../CreateModal/CreateModal";

export default function CreateNote() {
  const [CreateModalOpen, setCreateModalOpen] = useState(false);
  return (
    <div className="w-full">
      <div
        onClick={() => setCreateModalOpen(true)}
        className="flex justify-center items-center gap-1 w-[100px] py-2 rounded-[40px] bg-green-600 ml-20 hover:cursor-pointer drop-shadow-md shadow-inner shadow-green-200"
      >
        <span className="text-white">Add Note</span>
      </div>
      <Modal
        className="w-full md:w-1/2 min-h-[60dvh] p-2 bg-slate-900 bg-opacity-90 rounded-md flex"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-opacity-40 bg-black z-50"
        isOpen={CreateModalOpen}
        ariaHideApp={false}
        onRequestClose={() => setCreateModalOpen(false)}
      >
        <CreateModal onClose={() => setCreateModalOpen(false)} />
      </Modal>
    </div>
  );
}
