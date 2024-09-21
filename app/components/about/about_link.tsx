import { motion } from 'framer-motion';
import Link from 'next/link';

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
        <motion.div whileHover={{ scale: 1.1 }}>
            <Link
                href={url}
                className={`w-fit h-fit px-4 py-2 flex flex-row justify-center gap-2 ${background} ${text} font-normal rounded-full`}
            >
                {name}

                <div className={`w-[20px] ${text}`}>{icon}</div>
            </Link>
        </motion.div>
    );
};

export default AboutLink;
