import Header from "@/components/Header";
import InputUI from "@/components/InputUI";
import ItemCard from "@/components/ItemCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default async function Page({ params }: any) {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <div className="flex flex-col bg-zinc-950">
      <div className="p-5 text-white">
        <Link href={`/`}>
          <IoIosArrowBack size={25} />
        </Link>
      </div>
      <div>
        <InputUI />
        {/* Popular Anime */}
        <section>
          <div>
            <h2 className="text-white p-5 mt-5 text-xl">
              Search for{" "}
              <span className="underline italic capitalize">
                {keyword.replace("%20", " ")}
              </span>
            </h2>
          </div>
          <ItemCard api={searchAnime} />
        </section>
      </div>
    </div>
  );
}
