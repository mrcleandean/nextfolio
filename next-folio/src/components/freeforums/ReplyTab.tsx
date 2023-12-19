"use client";
import { IoShareOutline } from "react-icons/io5";
import { HiOutlineReply } from "react-icons/hi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TiArrowForwardOutline } from "react-icons/ti";
import { useRouter } from "next/navigation";

const ReplyTab = ({ id }: { id: string }) => {
  const router = useRouter();
  const [replyIsOpen, setReplyIsOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    username: "",
    content: "",
  });

  const submit = async () => {
    try {
      const res = await fetch(`/api/comment/${id}`, {
        method: "POST",
        body: JSON.stringify(inputValues),
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok) throw new Error("Something went wrong");
      setReplyIsOpen(false);
      router.refresh();
    } catch (error) {
      if (typeof error === "object" && error !== null && "message" in error) {
        console.log(error.message);
      } else {
        console.log("An unknown error has occured");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className="flex flex-col justify-center">
      <div className="pb-2 px-3 flex gap-2">
        <div
          onClick={() => setReplyIsOpen(prev => !prev)}
          className="hover:bg-blue-300 hover:scale-105 transition-all text-black bg-white w-9 h-7 flex items-center justify-center text-[14px] rounded-xl"
        >
          <HiOutlineReply size={19} />
        </div>
        <div className="hover:bg-blue-300 hover:scale-105 transition-all text-black bg-white w-9 h-7 flex items-center justify-center text-[14px] rounded-xl">
          <IoShareOutline size={20} />
        </div>
      </div>
      <AnimatePresence>
        {replyIsOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0.35, ease: "easeOut" },
              height: { duration: 0.35, ease: "easeOut" },
            }}
            className="w-full rounded-xl bg-black flex flex-col"
          >
            <div className="w-full flex items-center py-2 px-2 text-white text-[15.5px] gap-4">
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
                className="transition-all flex justify-center items-center gap-0.5 ml-1 bg-white rounded-md text-black p-1 hover:bg-blue-300 hover:scale-105 cursor-pointer"
              >
                <TiArrowForwardOutline size={22.5} />
                <p>Reply</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReplyTab;
