import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 text-secondary text-base font-normal">
      <h3>
        Loosely designed in{" "}
        <Link href="https://helpx.adobe.com/support/xd.html">
          <strong className="font-semibold">Adobe XD</strong>
        </Link>{" "}
        and built with{" "}
        <Link href="https://nextjs.org/">
          <strong className="font-semibold">Next.js</strong>
        </Link>{" "}
        and{" "}
        <Link href="https://tailwindcss.com/">
          <strong className="font-semibold">Tailwind CSS</strong>
        </Link>{" "}
        by yours truly.
      </h3>
      <h3>© 2024 Liel Amar</h3>
    </div>
  );
};

export default Footer;
