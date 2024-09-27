import SectionTitle from "@components/ui/section-title";
import { EducationItem } from "@content/education";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Education = ({ educationItems }: { educationItems: EducationItem[] }) => {
  return (
    <>
      <div className="relative space-y-4">
        <SectionTitle title="🎓 Education" />

        {educationItems.map((item, index) => {
          const start = typeof item.start === "string" ? item.start : `${item.start.month.substring(0, 3)} ${item.start.year}`;
          const end = typeof item.end === "string" ? item.end : `${item.end.month.substring(0, 3)} ${item.end.year}`;

          return (
            <div key={index} className="w-full flex flex-col md:grid grid-cols-4 md:gap-y-8 gap-x-4">
              <div className="h-7 flex flex-col justify-center">
                <div className="col-span-1 text-secondary text-base font-normal">{`${start} - ${end}`}</div>
              </div>

              <div className="col-span-3 flex flex-col gap-4 mb-4 md:mb-0">
                <div className="flex flex-col">
                  <h2 className="text-primary text-lg font-semibold">{item.title}</h2>
                  <div className="flex flex-row items-center gap-2 text-secondary text-base font-normal">
                    <h3>{item.schoolName}</h3>

                    {item.redirectUrl && (
                      <Link href={item.redirectUrl} target="_blank" rel="noopener noreferrer" passHref>
                        <ExternalLink size={16} />
                      </Link>
                    )}
                  </div>
                </div>

                {item.description && <h3 className="text-secondary text-base font-normal">{item.description}</h3>}

                {item.additional && (
                  <div className="flex flex-col">
                    {item.additional.map((additional, index) => (
                      <h3 key={index} className="text-secondary text-base font-normal">
                        {additional}
                      </h3>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
