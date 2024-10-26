import VideoPlayer from "@/app/Utilities/VideoPlayer";
import { numberToMonth } from "@/components/numberToMonth";
import { Button } from "@/components/ui/button";
import { getAnimeResponse } from "@/lib/api-libs";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params: { id } }: any) {
  const anime = await getAnimeResponse(`anime/${id}`);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <Link href={"/"} className="p-2">
        <ChevronLeftIcon size={40} />
      </Link>
      <h2 className="text-2xl text-center md:ml-[600px] md:text-xl">
        {anime.data.title}
      </h2>
      <div className="flex flex-col bg-zinc-950 h-full md:grid md:grid-cols-2 md:h-full">
        <div className="flex flex-col justify-center items-center p-10 text-center">
          <Image
            src={anime.data.images.jpg.image_url}
            width={200}
            height={200}
            className="mt-10 w-[400px] h-[570px]"
            alt="Images"
          />
          <div className="grid grid-cols-3 gap-2 mt-5">
            <Button
              variant={"outline"}
              className="rounded-full hover:bg-slate-300 cursor-default text-black"
            >
              {anime.data.score}
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full hover:bg-slate-300 cursor-default text-black"
            >
              #{anime.data.rank}
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full hover:bg-slate-300 cursor-default text-black"
            >
              #{anime.data.popularity}
            </Button>
          </div>
          <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
          </div>
        </div>
        <div className="w-[470px] flex flex-col ml-5 mb-5 mt-16 md:mt-[110px] md:w-[888px] md:-ml-[150px] md:max-h-[870px] left-0 xs:w-[450px] p-5 bg-white md:grid rounded-md text-black">
          <h2 className="text-lg text-center md:text-xl">Informations</h2>
          <div className="flex flex-col float-left mt-5 gap-y-2 md:ml-5">
            <div className="text-base flex flex-wrap gap-2 mb-5">
              <h4>Synopsis: </h4>
              <p>{anime.data.synopsis ? anime.data.synopsis : "Unknown"}</p>
            </div>
            <h4>
              Type:{" "}
              <a
                className="text-blue-500 font-bold cursor-pointer"
                href="/type"
              >
                {anime.data.type}
              </a>
            </h4>
            <h4>Episodes : {anime.data.episodes}</h4>
            <h4>Status: {anime.data.status}</h4>
            <h4>
              Aired: {anime.data.aired.prop.from.day} -{" "}
              {months[anime.data.aired.prop.from.month - 1]}-{" "}
              {anime.data.aired.prop.from.year} to{" "}
              {anime.data.aired.prop.to.day} -{" "}
              {months[anime.data.aired.prop.to.month - 1]} -{" "}
              {anime.data.aired.prop.to.year}
            </h4>
            <h4>
              Premiered:{" "}
              {anime.data.premiered ? anime.data.premiered : "Unknown"}
            </h4>
            <h4>
              Broadcast:{" "}
              {anime.data.broadcast.string
                ? anime.data.broadcast.string
                : "Unknown"}
            </h4>
            <h4>
              Producers:{" "}
              <a
                href="/"
                className="cursor-pointer text-blue-500 font-semibold"
              >
                {anime.data.producers[0]?.name
                  ? anime.data.producers[0].name
                  : "Unknown"}
              </a>
            </h4>
            <h4>
              Licensors:{" "}
              {anime.data.licensors.mal_id
                ? anime.data.licensors.name
                : "Unknown"}
            </h4>
            <h4>Studios: {anime.data.studios[0]?.name}</h4>
            <h4>Source: {anime.data.source}</h4>
            <h4 className="flex gap-x-3">
              Genres:{" "}
              {anime.data.genres.map((genre: any) => (
                <a
                  href={`/genre/${genre.mal_id}`}
                  className="text-blue-500 font-semibold cursor-pointer"
                >
                  {genre.name}
                  <span className="text-black text-sm">,</span>
                </a>
              ))}
            </h4>
            <h4>
              Theme: {anime.data.theme ? anime.data.theme : "i dont know"}
            </h4>
            <h4>Demographic: {anime.data.demographics[0]?.name}</h4>
            <h4>Duration: {anime.data.duration}</h4>
            <h4>Rating: {anime.data.rating}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
