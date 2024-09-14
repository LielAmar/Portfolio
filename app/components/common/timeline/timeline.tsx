'use client';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import BookIcon from '@/app/icons/book';
import BriefcaseIcon from '@/app/icons/briefcase';
import PlaneIcon from '@/app/icons/plane';
import VolunteerIcon from '@/app/icons/volunteer';
import Image from 'next/image';
import Link from 'next/link';

export type TimelineItem = {
    title: string;
    subtitle?: string;
    date: string;
    content?: string;
    type: 'education' | 'work' | 'abroad' | 'volunteer';
    image?: string;
    url?: string;
};

const Timeline = ({
    title,
    timelineItems,
}: {
    title: string;
    timelineItems: TimelineItem[];
}) => {
    return (
        <div className="w-full h-full flex flex-col items-center gap-10">
            <h1 className="text-4xl font-medium text-lightText">{title}</h1>

            <VerticalTimeline
                lineColor="rgba(229, 229, 229, 0.5)"
                animate={true}
            >
                {timelineItems.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        visible={true}
                        contentStyle={{
                            background: 'rgba(229, 229, 229, 0.8)',
                            borderRadius: '1rem',
                            color: '#1A1A1A',
                            boxShadow: '0 0 0 0',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid rgba(229, 229, 229, 0.8)',
                        }}
                        date={item.date}
                        dateClassName="text-md !font-light text-darkText min-[1170px]:text-lightText !opacity-100"
                        iconStyle={{
                            background: 'rgba(229, 229, 229, 1)',
                            color: '#1A1A1A',
                            boxShadow: '0 0 0 0',
                        }}
                        icon={
                            item.type === 'education' ? (
                                <BookIcon />
                            ) : item.type === 'work' ? (
                                <BriefcaseIcon />
                            ) : item.type === 'abroad' ? (
                                <PlaneIcon />
                            ) : (
                                <VolunteerIcon />
                            )
                        }
                    >
                        <div className="w-full flex flex-col gap-5">
                            <div className="w-full flex flex-row justify-left items-center gap-10">
                                {item.image &&
                                    (item.url ? (
                                        <Link href={item.url}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={100}
                                                height={100}
                                                className="w-24 h-24"
                                            />
                                        </Link>
                                    ) : (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={100}
                                            height={100}
                                            className="w-24 h-24"
                                        />
                                    ))}

                                <div className="flex flex-col">
                                    <h3 className="text-lg text-darkText font-semibold">
                                        {item.title}
                                    </h3>

                                    <h4 className="text-md text-darkText font-thin">
                                        {item.subtitle}
                                    </h4>
                                </div>
                            </div>

                            {item.content && (
                                <div className="w-full flex flex-col gap-5 align-center">
                                    <div className="w-full flex flex-col gap-2">
                                        {item.content &&
                                            item.content
                                                .split('\n')
                                                .filter(
                                                    (line) =>
                                                        line.replaceAll(' ', '')
                                                            .length > 0
                                                )
                                                .map((line, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-md text-darkText font-regular"
                                                    >
                                                        {line}
                                                    </span>
                                                ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
