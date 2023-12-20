"use client";
import { FilterButton, NewTab } from "@/components/freeforums";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const Filters = () => {
  const [newPostIsOpen, setNewPostIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center gap-3 flex-col">
      <div className="flex justify-evenly gap-2.5">
        <FilterButton hover="bg-blue-300" text="Newest" />
        <FilterButton hover="bg-red-300" text="Negative" />
        <FilterButton hover="bg-red-300" text="Positive" />
        <FilterButton hover="bg-yellow-200" text="Admin" />
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
