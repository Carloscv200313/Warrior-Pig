import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "WARRIOR PIG",
  description: "Warrior Pig es su proveedor confiable de carne de chancho de alta calidad. Con años de experiencia, garantizamos frescura, sabor inigualable y un compromiso con la excelencia. ¡Descubra el mejor sabor para sus recetas hoy!",
  keywords: "carne de chancho, cerdo premium, proveedor de carne, carne fresca, calidad superior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-white"
      >
        {children}
      </body>
    </html>
  );
}
