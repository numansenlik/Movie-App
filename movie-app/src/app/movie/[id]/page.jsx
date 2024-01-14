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
  console.log(movieDetail, "movies");
  return <div className="relative p-7 min-h-screen">{movieDetail.title}</div>;
};
export default Page;
