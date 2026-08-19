import { useGSAP } from "@gsap/react"
import ClipPathTitle from "../components/ClipPathTitle"
import gsap from "gsap";
import { SplitText } from "gsap/all";
import VideoPin from "../components/VideoPin";
import { useMediaQuery } from "react-responsive";

const BenifitSection = () => {

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const hParaSplit = !isMobile ? SplitText.create(".para-animation", { type: "words" }) : null;

            const revealTl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: ".benefit-section",
                    start: "top 65%",
                    end: "top -10%",
                    scrub: 1.5,
                }
            });

            revealTl.from(hParaSplit?.words ?? [], {
                duration: 1,
                stagger: 0.2,
                opacity: 0,
                rotate: 8,
                yPercent: 30,
                ease: "power1.inOut"
            }).to(".benefit-section .first-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            }).to(".benefit-section .second-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            }).to(".benefit-section .third-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            }).to(".benefit-section .fourth-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.out"
            });
        });
    });

    return (
        <section className="benefit-section">
            <div className="container mx-auto pt-16 mb-0 py-0">
                <div className="col-center">
                    <p className="md:text-sm para-animation text-milk hidden md:block">What We Promise:
                        <br />Explore What Makes Bisi's Bites Special
                    </p>
                </div>

                <div className="md:mt-20 md:mb-0 mb-30 mt-30 col-center">
                    <ClipPathTitle title={"Endless Variety"} color={"#f2f1ed"} bg={"#710014"} className={"first-title"} borderColor={"#161616"} />
                    <ClipPathTitle title={"Always Personalized"} color={"#161616"} bg={"#b38f6f"} className={"second-title"} borderColor={"#161616"} />
                    <ClipPathTitle title={"Same-Day Delivery"} color={"#f2f1ed"} bg={"#710014"} className={"third-title"} borderColor={"#161616"} />
                    <ClipPathTitle title={"Stunning Aesthetics"} color={"#161616"} bg={"#b38f6f"} className={"fourth-title"} borderColor={"#161616"} />
                </div>
                <div className="md:mt-0 md:pb-0 pb-20 mt-10">
                    <p className="text-milk">And much more ...</p>
                </div>
            </div>

            <div className="vd-pin relative overlay-box md:-mt-52 mt-0 hidden md:block">
                <div className="video-wrapper relative w-full h-screen">
                    <VideoPin />
                </div>
            </div>
        </section>
    )
}

export default BenifitSection