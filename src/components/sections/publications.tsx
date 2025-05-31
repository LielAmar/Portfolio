import Link from "next/link";

import SectionTitle from "@components/ui/section-title";
import { PublicationItem } from "@content/publications";
import Image from "next/image";

const Publications = ({ publicationsItems }: { publicationsItems: PublicationItem[] }) => {
  return (
    <>
      <div className="relative space-y-4">
        <SectionTitle title="🏆 Publications" />

        {publicationsItems.map((item, index) => {
          return (
            <div key={index} className="w-full flex flex-col md:grid grid-cols-4 md:gap-y-8 gap-x-4">
              <div className="col-span-4 flex flex-col gap-4 mb-4 md:mb-0">
                <div className="flex flex-col">
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary text-lg font-semibold">{item.name}</Link>
                  <h3 className="text-secondary text-base font-normal italic">{item.venue}</h3>

                  {item.authors && (
                    <div className="flex flex-row items-center gap-0.5 text-secondary text-base font-normal">
                      {item.authors.map((author, authorIndex) => (
                        <Link
                          key={authorIndex}
                          href={author.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`hover:underline ${author.name == "Liel Amar" && "font-medium text-primary"}`}
                        >
                          {author.name + (authorIndex < item.authors.length - 1 ? ", " : "")}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {item.description && <h3 className="text-secondary text-base font-normal">{item.description}</h3>}

                <Image src={item.image} alt={item.name} width={1200} height={200} className="rounded-lg mb-2" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Publications;
