import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";
import NoFavorite from "../components/Favorite/NoFavorite";
import FavoriteDetail from "../components/Favorite/FavoriteDetail";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Favorite = () => {
  const favorite = useSelector((state) => state.foodSlice.favorite);
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  if (favorite.length) {
    return (
      <div
        className={
          darkMode
            ? " flex flex-col  h-screen bg-gray-900"
            : " flex flex-col  h-screen"
        }
      >
        <Navbar />
        <div
          className={
            darkMode
              ? "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center bg-gray-900"
              : "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center "
          }
        >
          {favorite?.map((item) => {
            return <FavoriteDetail key={item?.idMeal} {...item} />;
          })}
        </div>
        <div className=" mt-auto relative">
          <a
            href="#foods"
            className={
              darkMode
                ? " btn animate-bounce  absolute text-4xl text-white  right-7 top-[-70px]"
                : " btn animate-bounce  absolute text-4xl text-[#d02a3a] right-7 top-[-70px]"
            }
          >
            <BsFillArrowUpSquareFill />
          </a>
          <Footer />
        </div>
      </div>
    );
  }
  return <NoFavorite />;
};

export default Favorite;
