import Movies from "@/components/Movies";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTUxNjhmODE2ZGZiYzg1ZWJkYjE5MjQ4MTdmNDkyMyIsInN1YiI6IjY1YTJmYWI5MjY2Nzc4MDEyYjY0MjBmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CHnV6a_mVTM6yDnyHFnv3RydBqinz0mI185JpZw1_n0",
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
    options
  );
  const data = await res.json();
  console.log(data.results, "data sayfasi");
  return (
    <div>
      {!data?.results ? (
        <div>Aranilan isim esleşmedi </div>
      ) : (
        <div className="flex items-center flex-wrap gap-3">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Page;
