"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const Cart = () => {
    const contenido = [
        { titulo: "Calidad garantizada", descripcion: "Solo seleccionamos las mejores piezas para ti.", img: "/top.png" },
        { titulo: "Frescura inigualable", descripcion: "Desde el productor a tu mesa.", img: "/pig.png" },
        { titulo: "Certificación SENASA", descripcion: "Cumplimos con los estándares más altos de seguridad alimentaria.", img: "/escudo.png" },
        { titulo: "Atención personalizada", descripcion: "Nuestro equipo está aquí para guiarte en cada paso.", img: "/soporte.png" },
    ];

    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-10 lg:px-10 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
        >
            {contenido.map((cont) => (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    key={cont.titulo}
                >
                    <div className="flex flex-col items-center bg-zinc-200 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <Image
                            src={cont.img}
                            alt={`Icono de ${cont.titulo}`}
                            height={150}
                            width={150}
                            className="mb-4"
                        />
                        <h3 className="text-center text-[#1b2631] text-xl font-bold font-serif mb-2">
                            {cont.titulo}
                        </h3>
                        <p className="text-center text-[#1a5276] text-base font-medium">
                            {cont.descripcion}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};
