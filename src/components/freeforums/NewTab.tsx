"use client";
import { TiArrowForwardOutline } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewTab = ({ newPostIsOpen, setNewPostIsOpen }: { newPostIsOpen: boolean; setNewPostIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    title: "",
    username: "",
    content: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const submit = async () => {
    try {
      const res = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify(inputValues),
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok) throw new Error("Something went wrong");
      setNewPostIsOpen(false);
      router.refresh();
    } catch (error) {
      if (typeof error === "object" && error !== null && "message" in error) {
        console.log(error.message);
      } else {
        console.log("An unknown error has occured");
      }
    }
  };
  return (
    <div className="w-[32.5rem] flex flex-col items-start gap-2">
      <AnimatePresence>
        {newPostIsOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.35, ease: "easeOut" },
              height: { duration: 0.35, ease: "easeOut" },
            }}
            className="w-[32.5rem] rounded-xl border-white border-[1px] bg-black flex flex-col"
          >
            <div className="w-full flex items-center py-2 px-2 text-white text-[15.5px] gap-4">
              <input
                onChange={handleChange}
                name="title"
                value={inputValues.title}
                className="bg-white rounded-lg text-black p-1.5"
                placeholder="Title"
              />
              <input
                onChange={handleChange}
                name="username"
                value={inputValues.username}
                className="bg-white rounded-lg text-black p-1.5"
                placeholder="Display Name"
              />
            </div>
            <div className="bg-white w-full p-1 flex justify-center items-center">
              <textarea
                onChange={handleChange}
                name="content"
                value={inputValues.content}
                placeholder="Say something interesting"
                className="bg-gray-300 w-full text-black p-1 rounded-md h-36"
              />
            </div>
            <div className="flex justify-start items-center p-1.5">
              <div
                onClick={submit}
                className="transition-all flex justify-center items-center gap-0.5 ml-1 bg-white rounded-md text-black p-1 hover:bg-lime-300 hover:scale-105 cursor-pointer"
              >
                <TiArrowForwardOutline size={22.5} />
                <p>Post</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewTab;
