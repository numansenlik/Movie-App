"use client";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    {
      name: "Abaut",
      url: "/about",
    },
    {
      name: "Sing In",
      url: "/login",
    },
  ];
  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      setKeyword("");
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="flex items-center gap-5 h-20 mx-5 ">
      <div className="bg-gray-300 p-3 text-2xl font-bold rounded-lg">
        Movie App
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 mx-5 rounded-lg">
        <input
          value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none flex-1 bg-transparent"
          placeholder="Arama Yapiniz!!!"
          type="text"
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((item, index) => {
        return <MenuItem item={item} key={index} />;
      })}
    </div>
  );
};
export default Header;
