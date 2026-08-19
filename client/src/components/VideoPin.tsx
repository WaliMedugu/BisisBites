import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { getImage } from '../utils/media';
import pinVideo from "../assets/videos/pin-video.mp4"
import { useMediaQuery } from "react-responsive";

const VideoPin = () => {

    const vidMob = useMediaQuery({
        query: "(max-width:768px)",
    })

    useGSAP(() => {
        if (!vidMob) {
            const vpTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".video-wrapper",
                    start: "0px top",
                    end: "2500px top",
                    scrub: 1.5,
                    pin: true,
                    // markers: true
                }
            });
            vpTl.fromTo(
                ".video-box",
                { clipPath: "circle(6% at 50% 50%)" },
                {
                    clipPath: "circle(100% at 50% 50%)",
                    ease: "power1.inOut",
                }
            );
        } else {
            gsap.to(".video-wrapper", {
                scrollTrigger: {
                    trigger: ".vd-pin",
                    start: "0px top",
                    end: "120% top",
                    scrub: 1.5,
                    pin: true,
                    // markers: true
                }
            })
        }
    });

    return (
        <div className="h-screen overflow-hidden ">
            <div className="relative w-full h-full video-box overflow-hidden">
                {/* Spinning text circle overlay (desktop only) */}
                <div className="spin-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 md:w-[15%] w-[30%] h-auto hidden md:block pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path
                            id="textCirclePath"
                            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                            fill="transparent"
                        />
                        <text className="fill-milk font-sans font-bold tracking-[0.14em] text-[10px] uppercase">
                            <textPath href="#textCirclePath">
                                Foil Cake • Cake Parfait • Banana Bread • Birthday Cake •
                            </textPath>
                        </text>
                    </svg>
                </div>
                <video
                    src={pinVideo}
                    playsInline
                    muted
                    loop
                    autoPlay
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
                />
            </div>

            {/* Play button circle overlay (desktop only) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-100 scale-200 z-100 hidden md:block">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[9vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
                    <img src={getImage("play.svg")} alt="" className="size-[3vw] ml-[0.5vw]" />
                </div>
            </div>
        </div>
    )
};

export default VideoPin;