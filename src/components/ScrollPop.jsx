import { motion } from "framer-motion";

export const ScrollPop = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ type: "spring", stiffness: 120, damping: 10, delay }}
  >
    {children}
  </motion.div>
);
