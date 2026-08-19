import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { getImage } from "../utils/media";
import { flavorlists } from "../constants/details";

interface MenuItem {
    name: string;
}

interface NavMenuProps {
    isOpen: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen = false }) => {

    const menuItems: MenuItem[] = [
        { name: "Foil" },
        { name: "Parfait" },
        { name: "Banana" },
        { name: "Standard" },
        { name: "Birthday" },
        { name: "Custom" },
    ];

    const [hovered, setHovered] = useState<string | null>(null);

    // GSAP animation for menu open/close
    useEffect(() => {
        const menu = document.querySelector(".navmenu") as HTMLElement | null;
        if (!menu) return;

        if (isOpen) {
            // Open animation
            gsap.fromTo(
                menu,
                { yPercent: -100, opacity: 0, display: "flex" },
                { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", display: "flex" }
            );
        } else {
            // Close animation
            gsap.to(menu, {
                yPercent: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.in",
                onComplete: () => { gsap.set(menu, { display: "none" }) },
            });
        }
    }, [isOpen]);

    const isMatch = (bouquetName: string, itemHovered: string | null) => {
        if (!itemHovered) return false;
        if (itemHovered === "Custom" && bouquetName.includes("Chocolate")) return true;
        return bouquetName.toLowerCase().includes(itemHovered.toLowerCase());
    };

    return (
        <div className="navmenu fixed inset-0 w-full h-screen bg-milk justify-center items-center hidden z-50">
            <div className="flex w-full h-full flex-col lg:flex-row">
                {/* Left side - Menu Links */}
                <div className="menu-links w-full lg:w-1/2 flex flex-col justify-center items-center text-center p-8 mt-16 lg:mt-0">
                    {menuItems.map((item) => (
                        <a
                            href="https://wa.me/2348083822886"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={item.name}
                            onMouseEnter={() => setHovered(item.name)}
                            onMouseLeave={() => setHovered(null)}
                            className={`uppercase text-5xl lg:text-7xl font-extrabold tracking-tighter text-dark-brown transition-all duration-400 my-2 hover:text-red-brown ${
                                hovered === item.name ? "scale-105" : hovered ? "opacity-15" : ""
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}

                    <div className="flex justify-center items-center gap-6 text-lg mt-10 text-dark-brown font-semibold">
                        <a href="https://wa.me/2348083822886" target="_blank" rel="noopener noreferrer" className="hover:text-red-brown">WhatsApp</a>
                        <a href="https://instagram.com/bisis_bites" target="_blank" rel="noopener noreferrer" className="hover:text-red-brown">Instagram</a>
                        <a href="https://tiktok.com/@bisis_bites" target="_blank" rel="noopener noreferrer" className="hover:text-red-brown">TikTok</a>
                    </div>
                </div>

                {/* Right side - Product Collage Pattern */}
                <div className="menu-img w-full lg:w-1/2 p-6 grid grid-cols-2 lg:grid-cols-2 gap-4 bg-black overflow-y-auto">
                    {flavorlists.map((bouquet) => {
                        const active = isMatch(bouquet.name, hovered);
                        return (
                            <div 
                                key={bouquet.name} 
                                className={`relative overflow-hidden rounded-2xl bg-milk flex justify-center items-center p-4 transition-all duration-500 border border-mid-brown/20 ${
                                    active 
                                        ? "scale-102 border-2 border-dark-brown opacity-100 shadow-2xl z-10" 
                                        : hovered 
                                            ? "opacity-20 scale-95 blur-[1px]" 
                                            : "opacity-90 hover:opacity-100 hover:scale-102"
                                }`}
                            >
                                <img 
                                    src={getImage(bouquet.imageName)} 
                                    alt={bouquet.name} 
                                    className="max-h-[22vh] object-contain transition-transform duration-500 hover:rotate-3" 
                                />
                                <span className="absolute bottom-3 left-3 text-xs bg-dark-brown/80 backdrop-blur-md text-milk px-3 py-1 rounded-full font-bold tracking-wide">
                                    {bouquet.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavMenu;