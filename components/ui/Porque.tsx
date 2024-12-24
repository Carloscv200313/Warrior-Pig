"use client";
import { motion } from "framer-motion";

export const Porque = () => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                duration: 1,
                ease: "easeOut", 
            }} 
        >
            <h2 className="text-5xl xl:text-7xl xl:mb-14 text-[#2e4053] text-center pb-10 font-semibold">
                ¿𝐏𝐨𝐫 𝐪𝐮𝐞 𝐞𝐥𝐞𝐠𝐢𝐫 𝐖𝐚𝐫𝐫𝐢𝐨𝐫 𝐏𝐢𝐠?
            </h2>
        </motion.div>
    );
};
