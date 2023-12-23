"use client";
import { FilterButtons, NewTab } from "@/components/freeforums";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const Filters = () => {
  const [newPostIsOpen, setNewPostIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center gap-3 flex-col">
      <div className="flex justify-evenly gap-2.5">
        <FilterButtons />
        <div
          onClick={() => setNewPostIsOpen((prev) => !prev)}
          className="flex justify-center items-center bg-white hover:bg-lime-300 w-20 h-9 rounded-lg hover:scale-105 transition-all text-black gap-2 cursor-pointer"
        >
          <FaPlus />
          <p>New</p>
        </div>
      </div>
      <NewTab newPostIsOpen={newPostIsOpen} setNewPostIsOpen={setNewPostIsOpen} />
    </div>
  );
};

export default Filters;
