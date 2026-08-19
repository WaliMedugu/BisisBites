import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const firstTextSplit = SplitText.create(".first-text-split h1", {
                type: "chars"
            });
            const secTextSplit = SplitText.create(".second-text-split h1", {
                type: "chars"
            });

            const isMobile = window.innerWidth < 768;

            gsap.from(firstTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".first-text-split",
                    start: isMobile ? "top 85%" : "top 33%",
                }
            });

            gsap.to(".flavor-text-scroll", {
                duration: 1,
                clipPath: "polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
                scrollTrigger: {
                    trigger: ".flavor-text-scroll",
                    start: isMobile ? "top 85%" : "top 17%",
                }
            });

            gsap.from(secTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".second-text-split",
                    start: isMobile ? "top 85%" : "top 3%",
                }
            });
        });

        //Title Animation
        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top top",
                end: "bottom 80%",
                scrub: true,
            },
        });

        titleTl
            .to(".first-text-split", {
                xPercent: -30,
                ease: "power1.inOut",
            })
            .to(".flavor-text-scroll", {
                xPercent: -22,
                ease: "power1.inOut",
            }, "<")
            .to(".second-text-split", {
                xPercent: -10,
                ease: "power1.inOut",
            }, "<");
    });

    return (
        <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-10 md:gap-16">
            <div className="overflow-hidden 2xl:py-0 py-3 first-text-split w-full text-center">
                <h1 className="whitespace-nowrap text-center">We Make a</h1>
            </div>

            <div className="flavor-text-scroll relative my-4 md:my-0">
                <div className="bg-mid-brown pb-3 pt-2 md:pb-5 md:pt-3 px-5 text-center">
                    <h2 className="text-milk text-center whitespace-nowrap">Bespoke</h2>
                </div>
            </div>

            <div className="overflow-hidden 2xl:py-0 py-3 second-text-split w-full text-center">
                <h1 className="whitespace-nowrap text-center">Cakes & Parfaits</h1>
            </div>
        </div>
    );
};

export default FlavorTitle;