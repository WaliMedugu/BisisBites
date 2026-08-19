
const ClipPathTitle = ({
    title,
    color,
    bg,
    className,
    borderColor
}: {
    title: string;
    color?: string;
    bg?: string;
    className?: string;
    borderColor?: string;
}) => {
    return (
        <div className="2xl:text-[8.5rem] md:text-8xl text-[40px] font-bold uppercase leading-[1.2] md:leading-[9vw] tracking-[-.35vw] w-full max-w-[95vw] md:max-w-none flex justify-center text-center">
            <div
                style={{ clipPath: "polygon(50% 0%, 50% 0,50% 100%, 50% 100%)", borderColor: borderColor }}
                className={`${className} border-[.5vw] md:whitespace-nowrap whitespace-normal text-center opacity-0`}>
                <div className="pb-5 md:px-14 px-3 md:pt-0 pt-3 flex flex-col justify-center items-center h-full" style={{ backgroundColor: bg }}>
                    <h2 style={{ color: color }} className="text-center">{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default ClipPathTitle