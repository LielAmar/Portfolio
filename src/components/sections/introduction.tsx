"use client";

import Image from "next/image";
import Link from "next/link";

import SpigotMCIcon from "@icons/spigotmc";
import LinkedInIcon from "@icons/linkedin";
import TwitterIcon from "@icons/twitter";
import GitHubIcon from "@icons/github";
import { introductionItems } from "@content/introduction";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <>
      <div className="relative space-y-4">
        <div className="flex flex-row justify-center items-center gap-16">
          <Image src="/images/webp/me2.webp" alt="Me (Liel Amar)" width={200} height={200} className="rounded-full animate-float" />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-primary text-3xl">
                Hey, I am <strong className="font-semibold">Liel Amar</strong>!
              </h1>

              <div className="flex flex-col text-secondary text-lg leading-6">
                <h2>
                  I am a{" "}
                  <strong className="font-semibold">
                    <TypeAnimation sequence={introductionItems} wrapper="span" cursor={true} repeat={Infinity} />
                  </strong>
                </h2>
                <h2>with years of professional experience.</h2>
              </div>
            </div>

            <div className="flex flex-row gap-4 text-secondary stroke-1">
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
        </div>
      </div>
    </>
  );
};

export default Introduction;
