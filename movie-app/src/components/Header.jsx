import { BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <div className="flex items-center gap-7 h-20 ">
      <div className="bg-gray-300 p-3 text-2xl font-bold rounded-lg">
        Movie App
      </div>
      <div className="flex  flex-1 items-center justify-around gap-2 border p-3 mx-5 rounded-lg">
        <input placeholder="Arama Yapınız!!!" type="text" />
        <BiSearch size={25} />
      </div>
    </div>
  );
};
export default Header;
