import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

// Definisikan tipe untuk data anime
type AnimeProps = {
  mal_id: number;
  title: string;
  synopsis: string;
  images: string;
  id: number;
};

const ItemCard = ({ api }: any) => {
  return (
    <div className="flex justify-center mt-10 flex-wrap gap-5 mb-10">
      {api.data?.map((anime: any) => {
        return (
          <Card
            className="w-[350px] max-h-[600px]"
            key={anime.mal_id}
            color="slate"
          >
            <CardHeader className="w-full max-h-20">
              {anime.title.length > 39 ? (
                <CardTitle className="text-base p-2">{anime.title}</CardTitle>
              ) : (
                <CardTitle className="text-lg p-2">{anime.title}</CardTitle>
              )}
            </CardHeader>
            <CardContent>
              <Link href={`/${anime.mal_id}`}>
                <Image
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  width={200}
                  height={200}
                  className="mx-auto mt-3 max-h-[250px] hover:scale-[110%] transition-all"
                />
              </Link>
              {/* <div className="flex flex-col space-y-1.5 mt-5 text-white">
                <h2 className="text-lg mb-5">Synopsis</h2>
                <p className="h-20 overflow-hidden text-sm">{anime.synopsis}</p>
              </div> */}
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant={"outline"} className="hover:bg-slate-300">
                <Link href={"/anime/" + anime.mal_id}>See More</Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemCard;
