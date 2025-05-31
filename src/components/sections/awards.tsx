import { ExternalLink } from "lucide-react";
import Link from "next/link";

import SectionTitle from "@components/ui/section-title";
import { AwardItem } from "@content/awards";

const Awards = ({ awardsItems }: { awardsItems: AwardItem[] }) => {
  return (
    <>
      <div className="relative space-y-4">
        <SectionTitle title="🏆 Awards" />

        {awardsItems.map((item, index) => {
          return (
            <div key={index} className="w-full flex flex-col md:grid grid-cols-4 md:gap-y-8 gap-x-4">
              <div className="h-7 flex flex-col justify-center">
                <div className="col-span-1 text-secondary text-base font-normal">{`${item.date}`}</div>
              </div>

              <div className="col-span-3 flex flex-col gap-4 mb-4 md:mb-0">
                <div className="flex flex-col">
                  <h2 className="text-primary text-lg font-semibold">{item.name}</h2>
                  <div className="flex flex-row items-center gap-2 text-secondary text-base font-normal">
                    <h3>{item.institution}</h3>

                    {item.redirectUrl && (
                      <Link href={item.redirectUrl} target="_blank" rel="noopener noreferrer" passHref>
                        <ExternalLink size={16} />
                      </Link>
                    )}
                  </div>
                </div>

                {item.description && <h3 className="text-secondary text-base font-normal">{item.description}</h3>}

                {/* {item.techStack && (
                  <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
                    {item.techStack.map((tech, index) => (
                      <Link
                        target="_blank"
                        href={tech.url || "javascript:void(0);"}
                        rel="noopener noreferrer"
                        key={index}
                        className="flex flex-row items-center px-2 gap-2 rounded-full border-secondary hover:border-tech-icon transition-colors duration-200 border-2 cursor-pointer"
                      >
                        <h4 className="text-secondary hover:text-tech-icon transition-colors duration-200 text-sm font-normal">{tech.name}</h4>
                        {tech.icon && <tech.icon size={14} />}
                      </Link>
                    ))}
                  </div>
                )} */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Awards;
