import Image from 'next/image'
import { Banknote, CalendarDays, Award } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function OfertaEspecial() {
    return (
        <div className="w-full max-w-6xl mx-auto p-6">
            <Card className="overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative h-64 lg:h-auto  w-full">
                            <Image
                                src="/lechon.jpg"
                                alt="Lechón"
                                fill
                                className="object-cover"
                            />
                    </div>
                    <CardContent className="lg:w-1/2 p-8 bg-gradient-to-br from-amber-50 to-orange-100">
                        <h2 className="text-3xl font-bold text-orange-800 mb-6">Oferta Especial de Diciembre</h2>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-orange-200 p-3 rounded-full">
                                    <Banknote className="h-6 w-6 text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-orange-800">Precio Especial</p>
                                    <p className="text-2xl font-bold text-orange-600">¡Solo 28 soles el kilo!</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-orange-200 p-3 rounded-full">
                                    <CalendarDays className="h-6 w-6 text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-orange-800">Disponible</p>
                                    <p className="text-xl text-orange-700">Todo el mes de Diciembre</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-orange-200 p-3 rounded-full">
                                    <Award className="h-6 w-6 text-orange-600" />
                                </div>
                                <p className="text-lg text-orange-800">Asegura tu lechón para una celebración inolvidable</p>
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

