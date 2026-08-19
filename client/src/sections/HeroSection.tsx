import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { getImage } from '../utils/media';

const HeroSection = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const titleSplit = SplitText.create(".hero-title", { type: "chars" });

            const tl = gsap.timeline({ delay: 1 });

            tl.to(".hero-content", {
                opacity: 1,
                y: 0,
                ease: "power1.inOut"
            })
                .to(".hero-text-scroll", {
                    duration: 1,
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
                    ease: "circ.out"
                }, "-=0.5")
                .from(titleSplit.chars, {
                    yPercent: 200,
                    stagger: 0.02,
                    ease: "power2.out"
                }, "-=0.5");

            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hero-container",
                    start: "1% top",
                    end: "bottom top",
                    scrub: true,
                    // markers: true
                }
            });

            heroTl.to(".hero-container", {
                rotate: 7,
                scale: 0.9,
                yPercent: 30,
                ease: "power1.inOut"
            });
        });
    });


    return (
        <section>
            <div className="hero-container bg-milk">
                <div className="absolute inset-0 flex justify-center items-end pointer-events-none select-none z-0">
                    <img 
                        src={getImage("hero-img.png")} 
                        alt="Bisi's Bites Hero" 
                        className="max-h-[65vh] md:max-h-[75vh] w-auto object-contain translate-y-4"
                    />
                </div>
                <div className="hero-content opacity-0 relative z-10">
                    <div className="overflow-hidden">
                        <h1 className="hero-title lg:p-0 p-2 text-dark-brown">Bisi's Bites</h1>
                    </div>
                    <div className="hero-text-scroll">
                        <div className="hero-subtitle bg-mid-brown">
                            <h1 className="text-milk">Freshly Baked for You</h1>
                        </div>
                    </div>
                    <h2 className="text-dark-brown font-semibold bg-milk/70 p-4 rounded-xl backdrop-blur-sm">We bake premium bespoke cakes and parfaits out of the finest ingredients you love... chocolate fudge, red velvet, bananas, caramel, and more. Made to sweeten every moment.</h2>
                    <div className="hero-button bg-dark-brown hover:bg-mid-brown text-milk transition-colors shadow-lg">
                        <a href="https://wa.me/2349015043212" target="_blank" rel="noopener noreferrer" className="text-milk tracking-wider font-bold">EXPLORE CAKES</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;