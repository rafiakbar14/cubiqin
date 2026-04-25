'use client';

import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '6281234567890'; // Placeholder, should be configurable
    const message = 'Halo Cubiqin! Saya ingin berkonsultasi mengenai pembuatan website.';

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-8 right-8 z-[999] group flex items-center justify-center"
            title="Hubungi kami via WhatsApp"
        >
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 group-hover:opacity-40"></div>

            {/* Button */}
            <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform duration-300">
                <svg className="w-9 h-9 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.332 11.891-11.891 11.891-2.015 0-3.991-.512-5.741-1.486L0 24zm6.15-5.32c1.7 1.011 3.294 1.517 4.741 1.517 5.4 0 9.791-4.391 9.791-9.791 0-2.617-1.02-5.076-2.871-6.928C16.208 1.621 13.719.601 11.091.601c-5.4 0-9.791 4.391-9.791 9.791 0 1.83.51 3.616 1.486 5.176l-1.08 3.946 4.094-1.074zm11.391-5.71c-.274-.137-1.62-.8-1.87-.891-.25-.091-.433-.137-.616.137-.183.274-.711.891-.871 1.074-.16.183-.32.203-.594.066-.274-.137-1.156-.426-2.202-1.359-.814-.727-1.364-1.626-1.524-1.9-.16-.273-.017-.42.12-.556.121-.123.274-.32.411-.48.137-.16.183-.274.274-.457.091-.183.046-.343-.023-.48-.069-.137-.616-1.486-.845-2.035-.223-.532-.469-.459-.616-.467-.137-.007-.32-.01-.503-.01-.183 0-.479.069-.731.343-.251.274-.959.937-.959 2.286 0 1.348.982 2.651 1.12 2.834.137.183 1.933 2.951 4.675 4.137 1.256.543 2.15.774 2.885.876 1.144.158 2.183.109 3.003-.013.913-.137 1.87-.764 2.134-1.464.265-.7 0-1.28-.023-1.464l-.594-.274z" />
                </svg>
            </div>
        </button>
    );
};

export default WhatsAppButton;
