import React from "react";
import { motion } from "framer-motion";
import { MdError } from "react-icons/md";

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

interface InpuErrorProps {
  message: string | undefined;
}

const InputError: React.FC<InpuErrorProps> = ({ message }) => {
  if (message) {
    return (
      <motion.p
        className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md mb-[5px]"
        {...framer_error}>
        <MdError />
        {message}
      </motion.p>
    );
  } else {
    return (
      <div className="mb-[30px]">
        <span> </span>
      </div>
    );
  }
};

export default InputError;
