import SectionTitle from "@components/ui/section-title";

import GitHubIcon from "@icons/github";
import InstagramIcon from "@icons/instagram";
import LinkedInIcon from "@icons/linkedin";
import SpigotMCIcon from "@icons/spigotmc";
import TwitterIcon from "@icons/twitter";
import YouTubeIcon from "@icons/youtube";

import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="relative space-y-4">
        <SectionTitle title="📞 Contact" />

        <h3 className="text-secondary text-base font-normal">
          The best way to contact me is directly via email, at{" "}
          <u>
            <a href="mailto: liel@lielamar.com">liel@lielamar.com</a>
          </u>
          . Alternatively, send me a message on any platform I&apos;m active on!
        </h3>

        <div className="w-full justify-center flex flex-row gap-4 text-secondary stroke-1">
          <Link href="https://www.instagram.com/iamlielamar/" target="_blank" rel="noopener noreferrer" title="My Instagram Profile" passHref>
            <InstagramIcon className="cursor-pointer hover:text-instagram transition-color duration-200" strokeWidth={1.5} />
          </Link>

          <Link href="https://www.youtube.com/@liel_amar" target="_blank" rel="noopener noreferrer" title="My YouTube Channel" passHref>
            <YouTubeIcon className="cursor-pointer hover:text-youtube transition-color duration-200" strokeWidth={1.5} />
          </Link>

          <Link href="https://github.com/lielamar" target="_blank" rel="noopener noreferrer" title="My GitHub Profile" passHref>
            <GitHubIcon className="cursor-pointer hover:text-github transition-color duration-200" strokeWidth={1.5} />
          </Link>

          <Link href="https://twitter.com/iamlielamar" target="_blank" rel="noopener noreferrer" title="My Twitter Profile" passHref>
            <TwitterIcon className="cursor-pointer hover:text-twitter transition-color duration-200" strokeWidth={1.5} />
          </Link>

          <Link href="https://www.linkedin.com/in/liel-amar" target="_blank" rel="noopener noreferrer" title="My LinkedIn Profile" passHref>
            <LinkedInIcon className="cursor-pointer hover:text-linkedin transition-color duration-200" strokeWidth={1.5} />
          </Link>

          <Link href="https://www.spigotmc.org/members/lielamar.446937/" target="_blank" rel="noopener noreferrer" title="My SpigotMC Profile" passHref>
            <SpigotMCIcon className="cursor-pointer hover:text-spigotmc transition-color duration-200" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
