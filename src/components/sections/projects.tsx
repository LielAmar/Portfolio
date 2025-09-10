import SectionTitle from "@components/ui/section-title";
import { ProjectItem } from "@content/projects";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ projectsItems }: { projectsItems: ProjectItem[] }) => {
  return (
    <>
      <div className="relative space-y-4">
        <SectionTitle title="🛠️ Projects" />

        <div className="flex flex-col md:grid grid-cols-2 gap-4">
          {projectsItems.map((item, index) => {
            const background = `group-hover:bg-${item.backgroundColor}`;
            const border = `border-${item.backgroundColor}`;

            return (
              <Link key={index} href={item.href} title={item.name} className={`relative w-full h-full group overflow-hidden rounded-lg`}>
                {/* Border and hover background */}
                <div className={`absolute inset-0 ${background} ${border} border-2 border-opacity-25 rounded-lg transition-colors duration-300`} />

                {/* Content container */}
                <div className="relative w-full h-full px-8 py-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Image src={item.image} alt={item.name} width={100} height={100} style={{ width: "auto", height: "auto" }} />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 w-full h-full p-4 flex items-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-primary text-xl font-semibold text-center">{item.name}</h1>
                      <p className="text-secondary text-base font-normal text-center">{item.role}</p>
                    </div>
                    <p className="text-secondary text-base font-normal text-center">{item.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
