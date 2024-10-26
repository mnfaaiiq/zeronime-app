import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="text-white bg-black h-lvh grid grid-cols-1 justify-center items-center p-5 md:flex md:flex-col">
      <Image
        src={"/404.svg"}
        width={300}
        height={300}
        className="w-[400px] mx-auto md:w-[600px]"
        alt="Not Founded"
      />
      <Button
        variant={"outline"}
        className="text-black max-w-20 mx-auto hover:bg-slate-300 transition-all mt-0 md:mt-10"
      >
        <Link href={"/"}>Back</Link>
      </Button>
    </div>
  );
};

export default Page;
