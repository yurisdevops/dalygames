import { GameProps } from "@/utils/types/game";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/container";
import { Label } from "./components/label";
import { GameCard } from "@/components/gameCard";
import { Metadata } from "next";

interface PropsParams {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      {
        next: { revalidate: 60 },
      }
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const getGameSorted = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export async function generateMetadata({
  params,
}: PropsParams): Promise<Metadata> {
  const { id } = await params;
  try {
    const response: GameProps = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } }
    )
      .then((res) => res.json())
      .catch(() => {
        return {
          title: "DalyGames - Descubra jogos incríveis para se divertir.",
        };
      });

    return {
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "DalyGames - Descubra jogos incríveis para se divertir.",
    };
  }
}

export default async function Game({ params }: PropsParams) {
  const { id } = await params;

  const details: GameProps = await getData(id);

  const gameSorted: GameProps = await getGameSorted();

  if (!details) {
    redirect("/");
  }

  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          src={details.image_url}
          alt={details.title}
          priority={true}
          quality={100}
          fill={true}
          className="w-full h-80 max-h-96 object-cover opacity-50 hover:opacity-100 transition duration-1000 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{details.title}</h1>
        <p>{details.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataforma</h2>
        <div className="flex gap-2 flex-wrap">
          {details.platforms.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>
        <h2 className="font-bold text-lg mt-7 mb-2">Categoria</h2>
        <div className="flex gap-2 flex-wrap">
          {details.categories.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <p className="font-normal text-lg mt-7 mb-2">
          <strong className="font-bold">Data de lançamento:</strong>{" "}
          {details.release}
        </p>

        <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado</h2>
        <div className="flex-grow">
          <GameCard data={gameSorted} />
        </div>
      </Container>
    </main>
  );
}
