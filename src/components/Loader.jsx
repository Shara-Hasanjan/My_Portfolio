import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#1f232a] flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
        className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full"
      />
    </div>
  );
}
