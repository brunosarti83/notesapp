/* eslint-disable react/prop-types */
import { useState } from "react";
import ArchiveButton from "../ArchiveButton/ArchiveButton";
import Switch from "../Switch/Switch";
import { FaRegEdit } from "react-icons/fa";
import Modal from "react-modal";
import EditModal from "../EditModal/EditModal";

export default function Note({ id, title, description, active, archived }) {
  const [isActive, setIsActive] = useState(active);
  const [isArchived, setIsArchived] = useState(archived);
  const [EditModalOpen, setEditModalOpen] = useState(false);

  return (
    <div
      className="w-[22%] h-[300px] bg-gradient-to-br from-zinc-200/20 from-10% via-zinc-600/20 via-60% to-zinc-400/20 flex flex-col rounded-xl"
      style={{ opacity: isActive ? null : "20%" }}
    >
      <div className="p-2 flex">
        <div className="mr-auto my-auto">
          <Switch id={id} active={isActive} setIsActive={setIsActive} />
        </div>
        <div className="ml-auto my-auto">
          <ArchiveButton
            id={id}
            archived={isArchived}
            setIsArchived={setIsArchived}
          />
        </div>
      </div>
      <div
        className="text-slate-400 text-[24px] flex hover:cursor-pointer"
        onClick={() => setEditModalOpen(true)}
      >
        <div className="ml-auto mr-2">
          <FaRegEdit />
        </div>
      </div>
      <div className="h-1/4 flex mt-2">
        <h3 className="w-full text-center font-sonsie text-xl px-2 text-orange-400 m-auto">
          {title}
        </h3>
      </div>
      <div className="mt-4 ">
        <h6 className="w-full h-full text-center text-indigo-100 px-2">
          {description}
        </h6>
      </div>
      <Modal
        className="w-full md:w-1/2 min-h-[60dvh] p-2 bg-slate-900 bg-opacity-90 rounded-md flex"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-opacity-40 bg-black z-50"
        isOpen={EditModalOpen}
        ariaHideApp={false}
        onRequestClose={() => setEditModalOpen(false)}
      >
        <EditModal
          onClose={() => setEditModalOpen(false)}
          id={id}
          title={title}
          description={description}
        />
      </Modal>
    </div>
  );
}
