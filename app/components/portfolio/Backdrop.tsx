import { motion } from "framer-motion";

interface BackdropProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <motion.div
      onClick={onClick}
      className={`flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gray-900/75 z-[55]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
