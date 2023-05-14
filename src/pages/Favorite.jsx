import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";
import NoFavorite from "../components/Favorite/NoFavorite";
import FavoriteDetail from "../components/Favorite/FavoriteDetail";

const Favorite = () => {
  const favorite = useSelector((state) => state.foodSlice.favorite);
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  if (favorite.length) {
    return (
      <div
        className={
          darkMode
            ? " flex flex-col  h-screen bg-gray-800"
            : " flex flex-col  h-screen"
        }
      >
        <Navbar />
        <div
          className={
            darkMode
              ? "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center bg-gray-800"
              : "  mt-5 w-screen flex flex-wrap gap-11 py-2 justify-center "
          }
        >
          {favorite?.map((item) => {
            return <FavoriteDetail key={item?.idMeal} {...item} />;
          })}
        </div>
        <Footer />
      </div>
    );
  }
  return <NoFavorite />;
};

export default Favorite;
