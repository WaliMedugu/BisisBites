import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { getImage } from '../utils/media';

const BottomBanner = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const bTitleSplit = SplitText.create(".b-title", { type: "chars" });

            const revealTl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: ".bottom-banner",
                    start: "top 50%",
                    end: "top 10%",
                    scrub: 1.5,
                    // markers: true
                }
            });

            revealTl.from(bTitleSplit.chars, {
                stagger: 0.2,
                opacity: 0,
                rotate: 3,
                yPercent: 30,
                ease: "power1.inOut"
            }).to(".bottom-banner .rolling-animation", {
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            });
        });
    });


    return (
        <section className="bottom-banner 2xl:min-h-dvh w-full h-full overflow-hidden relative bg-[#222123] flex flex-col justify-center items-start">
            <img src={getImage("footer-dip.png")} alt="footer-img" className="w-full object-cover -translate-y-1" />
            <img src={getImage("bottom-banner.svg")} alt="" className="w-full h-auto mt-10 md:w-fit" />

            <div className="absolute md:w-[35rem] w-[90%] h-auto z-100 lg:top-[30%] top-[40%] lg:left-20 left-5">
                <div className="relative inline-block md:translate-y-20 z-100">
                    <div className="general-title relative flex flex-col justify-start items-start gap-5 md:gap-8">
                        <div className="overflow-hidden place-self-start">
                            <h1 className="text-white b-title whitespace-nowrap">Made For</h1>
                        </div>
                        <div className="rotate-[3deg] rolling-animation text-nowrap place-self-start">
                            <div className="bg-red pb-2 pt-1.5 px-3 md:pb-4 md:pt-0 md:px-5 inline-block">
                                <h2 className="text-milk whitespace-nowrap">Every Occasion</h2>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-10 mt-2 text-[#f3e2d5] text-sm font-paragraph flex flex-col lg:gap-14 gap-8">
                        <div>
                            <p className=" lg:w-1/2 w-[80%]">Order your customized cake today and make your loved ones feel truly special with Bisi's Bites. We offer same-day hand delivery.</p>
                        </div>
                        <div className="font-medium">
                            <a href="https://wa.me/2349015043212" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-4xl bg-black text-milk hover:bg-milk hover:text-black transition-colors font-bold tracking-wider">ORDER ONLINE NOW</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BottomBanner;