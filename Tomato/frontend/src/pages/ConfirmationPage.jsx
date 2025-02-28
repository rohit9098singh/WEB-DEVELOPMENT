
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]  rounded-xl m-1 bg-green-100">
      {/* Animated Check Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <CheckCircleIcon className="text-green-600 w-32 h-32" />
      </motion.div>

      {/* Animated Text */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-4xl font-bold text-green-800 mt-6"
      >
        Payment Successful!
      </motion.h2>
    </div>
  );
};

export default ConfirmationPage;

