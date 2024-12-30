import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";

import { BsArrowRightSquare } from "react-icons/bs";
import { Input } from "@/components/input";
import { GameCard } from "@/components/gameCard";

async function getDalyGame () {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
       { next: { revalidate: 320 } }
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}; 

async function getGamesData () {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`,    { next: { revalidate: 320 } }  );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export default async function Home() {
  let dalyGame: GameProps | null = null;
  let dataGames: GameProps[] = [];

  try {
    dalyGame = await getDalyGame();
  } catch (error) {
    console.error("Error fetching daily game:", error);
  }

  try {
    dataGames = await getGamesData();
  } catch (error) {
    console.error("Error fetching games data:", error);
  }

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você!
        </h1>

        {dalyGame ? (
          <Link href={`/game/${dalyGame.id}`}>
            <section className="w-full bg-black rounded-lg">
              <div className="w-full max-h-96 h-96 relative">
                <div className="absolute z-20 p-3 bottom-0 flex justify-center items-center gap-2">
                  <p className="font-bold text-xl text-white ">
                    {dalyGame.title}
                  </p>
                  <BsArrowRightSquare size={24} color="#fff" />
                </div>
                <Image
                  src={dalyGame.image_url}
                  alt={dalyGame.title}
                  priority={true}
                  quality={100}
                  fill={true}
                  className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition duration-1000 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
              </div>
            </section>
          </Link>
        ) : (
          <p>Não foi possível carregar um jogo exclusivo no momento.</p>
        )}

        <Input />

        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer...</h2>
        {dataGames.length > 0 ? (
          <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dataGames.map((item) => (
              <GameCard key={item.id} data={item} />
            ))}
          </section>
        ) : (
          <p>Não há jogos disponíveis no momento.</p>
        )}
      </Container>
    </main>
  );
}
