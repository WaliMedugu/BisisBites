import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { getImage } from '../utils/media';
import { useMediaQuery } from "react-responsive";

const FooterSection = () => {

    const isMobF = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const footTextSplit = SplitText.create(".footer-title-animation", { type: "chars" });

            gsap.from(footTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                zIndex: 0,
                scrollTrigger: {
                    trigger: ".footer-section",
                    start: `${isMobF ? "top 60%" : "top 50%"}`,
                    end: `${isMobF ? "top 20%" : "top 10%"}`,
                    scrub: 1.5,
                    // markers: true
                }
            });
        });
    });

    return (
        <section className="footer-section lg:pt-10 bg-black">

            <div className="lg:h-[25dvh] pt-[4vh] relative z-100">
                <div className="overflow-hidden">
                    <h1 className="general-title text-center text-milk footer-title-animation lg:pb-0 pb-3 font-bold tracking-wider">#BISISBITES</h1>
                </div>
            </div>
            <img 
                src={getImage("footer-bg-bouquet.png")} 
                alt="footer bg" 
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-45 mix-blend-luminosity" 
            />


            <div className="flex-center gap-4 relative z-10 md:mt-4 mt-2">
                <a href="https://wa.me/2349015043212" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="ri-whatsapp-line text-milk text-2xl"></i>
                </a>
                <a href="tel:09015043212" className="social-btn">
                    <i className="ri-phone-line text-milk text-xl"></i>
                </a>
            </div>

            <div className="mt-16 lg:mb-16 mb-10 md:px-7 px-5 flex gap-10 md:flex-row flex-col justify-between items-start text-milk font-paragraph md:text-sm font-medium relative z-10">
                <div className="flex items-start md:gap-10 gap-5">
                    <div>
                        <p className="font-bold text-mid-brown">Our Cakes</p>
                    </div>
                    <div>
                        <a href="https://wa.me/2349015043212" className="block hover:text-mid-brown">Cakes & Parfaits</a>
                        <a href="https://wa.me/2349015043212" className="block hover:text-mid-brown">Banana Bread</a>
                        <a href="https://wa.me/2349015043212" className="block hover:text-mid-brown">Foil Cakes</a>
                        <a href="https://wa.me/2349015043212" className="block hover:text-mid-brown">Custom Orders</a>
                    </div>
                    <div>
                        <a href="https://wa.me/2349015043212" className="block hover:text-mid-brown">Bespoke Cakes</a>
                        <a href="https://wa.me/2349015043212" className="block hover:text-mid-brown">About Bisi</a>
                        <a href="https://wa.me/2349015043212" className="block hover:text-mid-brown">Contact Us: 09015043212</a>
                    </div>
                </div>
                <div className="md:max-w-sm">
                    <p>
                        Get early access to holiday collections and stay informed about pop-ups, events, and special custom offerings!
                    </p>
                    <div className="flex justify-between items-center border-b border-[#D9D9D9] py-3 md:mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full placeholder:font-sans placeholder:text-[#999999] text-milk"
                        />
                        <img src={getImage("arrow.svg")} alt="arrow" />
                    </div>
                </div>
            </div>

            <div className="copyright-box relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
                <p>Copyright © 2026 Bisi's Bites - All Rights Reserved</p>
                <p className="text-xs opacity-75">Made by blueparticlestudios@gmail.com</p>
                <div className="flex items-center gap-7">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;