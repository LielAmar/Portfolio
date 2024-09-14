import Link from "next/link";

const AboutLink = ({
    name,
    url,
    background,
    text,
    icon,
}: {
    name: string;
    url: string;
    background: string;
    text: string;
    icon: any;
}) => {
    return (
        <Link
            href={url}
            className={`w-fit h-fit px-4 py-2 flex flex-row justify-center gap-2 ${background} ${text} font-light rounded-full transform duration-500 hover:-translate-y-1`}
        >
            {name}

            <div className={`w-[20px] ${text}`}>{icon}</div>
        </Link>
    );
};

export default AboutLink;