import SectionTitle from "@components/ui/section-title";

import { present } from "@content/about";

const About = () => {
  return (
    <>
      <div className="relative space-y-4">
        <SectionTitle title="📅 Present" />

        {present.map((item, index) => {
          const parts = item.split(/(\*[^*]+\*)/g);

          return (
            <h3 key={index} className="text-secondary text-base font-normal">
              {parts.map((part, i) => {
                if (/\*[^*]+\*/.test(part)) {
                  return (
                    <span key={i} className="font-semibold">
                      {part.replace(/\*/g, "")}
                    </span>
                  );
                }
                return part;
              })}
            </h3>
          );
        })}
      </div>
    </>
  );
};

export default About;
