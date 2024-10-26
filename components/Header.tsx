import Link from "next/link";
import React from "react";

type AnimeProps = {
  title: string;
  linkHref: string;
  linkTitle: string;
};

const Header = ({ title, linkHref, linkTitle }: AnimeProps) => {
  return (
    <div className="md:p-5 md:ml-10 p-2 ml-5 md:items-center flex md:flex-row flex-col md:justify-between">
      <h3 className="text-white text-xl font-bold font-sans">{title}</h3>
      <Link
        href={linkHref}
        className="text-white text-xl underline hover:text-slate-300 md:mt-0 mt-5"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
