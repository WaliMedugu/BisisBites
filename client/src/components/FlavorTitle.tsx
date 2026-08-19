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

            gsap.from(firstTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 70%",
                }
            });

            gsap.to(".flavor-text-scroll", {
                duration: 1,
                clipPath: "polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 55%",
                }
            });

            gsap.from(secTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 40%",
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
        <div className="general-title col-center h-full 2xl:gap-8 xl:gap-6 gap-5">
            <div className="overflow-hidden 2xl:py-0 py-2 first-text-split w-full text-center">
                <h1 className="text-dark-brown text-[1.4rem] sm:text-3xl md:text-[6.5rem] 2xl:text-[8.5rem] break-keep">We Make</h1>
            </div>

            <div className="flavor-text-scroll self-center">
                <div className="bg-mid-brown pb-4 2xl:pt-0 pt-3 2xl:px-5 px-4 inline-block">
                    <h2 className="text-milk whitespace-nowrap text-[1.4rem] sm:text-3xl md:text-[6.5rem] 2xl:text-[8.5rem]">Bespoke</h2>
                </div>
            </div>

            <div className="overflow-hidden 2xl:py-0 py-2 second-text-split w-full text-center">
                <h1 className="text-[1.4rem] sm:text-3xl md:text-[6.5rem] 2xl:text-[8.5rem] break-keep">Cakes</h1>
            </div>
        </div>
    );
};

export default FlavorTitle;