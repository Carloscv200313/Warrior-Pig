import React from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import Link from 'next/link';

interface WhatsAppBubbleProps {
    phoneNumber: string;
    message?: string;
}

export function WhatsAppBubble({ phoneNumber, message = 'Hola! Tengo una consulta' }: WhatsAppBubbleProps) {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg 
                hover:bg-green-600 transition-all duration-300 hover:scale-110 
                flex items-center group z-50"
            aria-label="Chat on WhatsApp"
        >
            <IconBrandWhatsapp stroke={2} className='w-8 h-8' />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out">
                Chatea con nosotros
            </span>
        </Link>
    );
}
