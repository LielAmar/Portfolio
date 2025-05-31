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

                // replace [text](url) with <a> tag, in same color underlined
                const urlMatch = part.match(/\[(.+?)\]\((.+?)\)/);

                const textBeforeUrl = part.split(/\[(.+?)\]\((.+?)\)/)[0];
                const textAfterUrl = part.split(/\[(.+?)\]\((.+?)\)/)[3];

                if (urlMatch) {
                  const [, text, url] = urlMatch;

                  return (
                    <>
                      {textBeforeUrl && <span key={`before-${i}`}>{textBeforeUrl}</span>}
                      <a
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-tech-icon underline transition-colors duration-200"
                      >
                        {text}
                      </a>
                      {textAfterUrl && <span key={`after-${i}`}>{textAfterUrl}</span>}
                    </>
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
