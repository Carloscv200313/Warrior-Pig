"use client"
import Image from "next/image";
import { motion } from "motion/react"
export const Cara = () => {
    return (
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                <Image
                    src={"/cara.png"}
                    alt={"arbol de navidad"}
                    width={500}
                    height={500}
                    className="
                    h-48 w-44
                    md:h-80 md:w-72
                    lg:h-72 lg:w-64
                    xl:h-96 xl:w-80 
                    drop-shadow-black"/>
            </motion.div>
    )
}
