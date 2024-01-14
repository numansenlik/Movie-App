"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="min-w-[400px] flex items-center relative flex-wrap cursor-pointer"
    >
      <Image
        className="object-cover"
        width={400}
        height={300}
        alt="Image"
        src={`https:/image.tmdb.org/t/p/original${
          dt?.backdrop_path || dt?.poster_path
        }`}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition duration-500 ">
        <div className="text-xl font-semibold">{dt?.title}</div>
        <div className="">Rate : {dt?.vote_average.toFixed(1)}</div>
      </div>
    </div>
  );
};
export default Movies;
