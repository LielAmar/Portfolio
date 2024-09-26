import SectionTitle from "@components/ui/section-title";
import { ExperienceItem } from "@content/experience";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Experience = ({ experienceItems }: { experienceItems: ExperienceItem[] }) => {
  return (
    <>
      <div className="relative space-y-4">
        <SectionTitle title="🖥️ Experience" />

        {experienceItems.map((item, index) => {
          const start = typeof item.start === "string" ? item.start : `${item.start.month.substring(0, 3)} ${item.start.year}`;
          const end = typeof item.end === "string" ? item.end : `${item.end.month.substring(0, 3)} ${item.end.year}`;

          return (
            <div key={index} className="w-full grid grid-cols-4 gap-y-8 gap-x-4">
              <div className="col-span-1 text-secondary text-base font-normal">{`${start} - ${end}`}</div>

              <div className="col-span-3 flex flex-col gap-4">
                <div className="flex flex-col leading-6">
                  <h2 className="text-primary text-lg font-semibold">{item.title}</h2>
                  <div className="flex flex-row items-center gap-2 text-secondary text-base font-normal">
                    <h3>{item.organization}</h3>

                    {item.redirectUrl && (
                      <Link href={item.redirectUrl} target="_blank" rel="noopener noreferrer" passHref>
                        <ExternalLink size={16} />
                      </Link>
                    )}
                  </div>
                </div>

                {item.description && <h3 className="text-secondary text-base font-normal leading-6">{item.description}</h3>}

                <div className="flex flex-col">
                  {item.additional &&
                    item.additional.map((additional, index) => (
                      <h3 key={index} className="text-secondary text-base font-normal leading-6">
                        {additional}
                      </h3>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
