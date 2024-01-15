"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    {
      name: "Popular",
      url: "popular",
    },
    { name: "Top Rated", url: "top_rated" },
    {
      name: "Up Coming",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 dark:bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          className={`cursor-pointer hover:opacity-80 ${
            tab.url === genre
              ? "underline underline-offset-8 text-blue-400 dark:text-orange-400"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};
export default Tabs;
