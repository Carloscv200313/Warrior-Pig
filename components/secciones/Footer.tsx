import { Truck, CheckCircle,  Clock } from 'lucide-react'

export default function FooterContacto() {
    return (
        <footer className="bg-neutral-200 py-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1">
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="bg-orange-100 p-4 rounded-full mb-4">
                            <Truck className="h-8 w-8 text-orange-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-orange-800 mb-2">Envíos</h4>
                        <p className="text-lg text-orange-700">A Lima Metropolitana</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="bg-orange-100 p-4 rounded-full mb-4">
                            <CheckCircle className="h-8 w-8 text-orange-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-orange-800 mb-2">Garantía</h4>
                        <p className="text-lg text-orange-700">Satisfacción en cada compra</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="bg-orange-100 p-4 rounded-full mb-4">
                            <Clock className="h-8 w-8 text-orange-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-orange-800 mb-2">Horario de Atención</h4>
                        <p className="text-lg text-orange-700">Lunes a Domingo: 9am - 7pm</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-orange-800">&copy; 2024 WARRIOR PIG.</p>
                </div>
            </div>
        </footer>
    )
}

