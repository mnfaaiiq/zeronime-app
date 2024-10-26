import Header from "@/components/Header";
import InputUI from "@/components/InputUI";
import ItemCard from "@/components/ItemCard";
import { getAnimeResponse, getNestedAnime, reproduce } from "@/lib/api-libs";

export default async function Home() {
  const TopAnime = await getAnimeResponse("top/anime", "limit=24");

  let recommendedAnime = await getNestedAnime("recommendations/anime", "entry");

  recommendedAnime = await reproduce(recommendedAnime, 4);

  return (
    <div className="flex flex-col bg-zinc-950">
      <InputUI api={TopAnime} />
      {/* Popular Anime */}
      <section>
        <Header title="Top Anime" linkTitle="see All" linkHref="/popular" />
        <ItemCard api={TopAnime} />
      </section>

      {/* Newest Anime */}
      <section>
        <Header title="Recommendation" linkTitle="see All" linkHref="/new" />
        <ItemCard api={recommendedAnime} />
      </section>
    </div>
  );
}
