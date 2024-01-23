import Image from "next/image";

const getMovie = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTUxNjhmODE2ZGZiYzg1ZWJkYjE5MjQ4MTdmNDkyMyIsInN1YiI6IjY1YTJmYWI5MjY2Nzc4MDEyYjY0MjBmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CHnV6a_mVTM6yDnyHFnv3RydBqinz0mI185JpZw1_n0",
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return res.json();
};

const Page = async ({ params }) => {
  const id = params.id;

  const movieDetail = await getMovie(id);
  return (
    <div className="relative p-7 min-h-screen ">
      <Image
        fill
        alt="image"
        className="object-cover"
        src={`https:/image.tmdb.org/t/p/original${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute ">
        <div className="text-4xl font-bold my-3 text-white">
          {movieDetail?.title}
        </div>
        <div className="w-1/2  text-white">{movieDetail?.overview}</div>
        <div className="w-1/2 my-3  text-white">
          {movieDetail?.release_date} - {movieDetail?.vote_average?.toFixed(2)}
        </div>
        <div className="border my-4 w-32 p-2 rounded-md text-center text-lg cursor-pointer font-bold hover:bg-white hover:text-gray-600 text-white">
          Trail
        </div>
      </div>
    </div>
  );
};
export default Page;
