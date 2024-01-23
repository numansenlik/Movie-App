import Movies from "@/components/Movies";

const Page = async ({ searchParams }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTUxNjhmODE2ZGZiYzg1ZWJkYjE5MjQ4MTdmNDkyMyIsInN1YiI6IjY1YTJmYWI5MjY2Nzc4MDEyYjY0MjBmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CHnV6a_mVTM6yDnyHFnv3RydBqinz0mI185JpZw1_n0",
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?language=en-US`,
    options
  );
  const data = await res.json();

  return (
    <div className=" flex items-center justify-center flex-wrap gap-3 ">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};
export default Page;
