import React from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { findInputError } from "./findInputError";
import { isFormInvalid } from "./isFormInvalid";

interface InputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  validation?: Record<string, unknown>;
  name: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  placeholder,
  validation,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="text-[#424551] text-[14px] font-[400] leading-[21px] mb-[10px]">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        className="mb-[10px] md:mb-0 w-auto h-[75px] border-[1px] border-[#9F9F9F] rounded-[15px] focus:outline-none px-[10px]"
        {...register(name, validation)}
      />
    </div>
  );
};

const InputError: React.FC<{ message: string }> = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md mb-[5px]"
      {...framer_error}>
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default Input;
