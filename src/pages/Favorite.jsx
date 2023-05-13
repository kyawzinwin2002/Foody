import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { REMOVE_FAVORITE } from "../redux/services/foodSlice";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Favorite = () => {
  const favorite = useSelector((state) => state.foodSlice.favorite);
  const darkMode = useSelector((state) => state.foodSlice.darkMode);

  const dispatch = useDispatch();

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
            return (
              <div
                key={item?.idMeal}
                className={
                  darkMode
                    ? " p-4 shadow-lg rounded-2xl  flex flex-col gap-3 relative border-yellow-700 shadow-red-500  border-2"
                    : " p-4 shadow-md flex rounded-2xl flex-col gap-3 border-2  relative"
                }
              >
                <img src={item?.strMealThumb} className=" w-[150px]" alt="" />
                <div className="flex justify-end gap-2">
                  <Link to={`/detail/${item?.idMeal}`}>
                    <button className=" px-2 text-lg py-2 rounded-md text-white bg-[#d02a3a]">
                      <AiOutlineFileSearch />
                    </button>
                  </Link>

                  <button
                    onClick={() => {
                      dispatch(REMOVE_FAVORITE(item));
                    }}
                    className=" px-1 text-lg py-1 rounded-md border-2 text-[#d02a3a] bg-white border-[#d02a3a] "
                  >
                    <BsTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div
      className={
        darkMode
          ? " flex flex-col  h-screen bg-gray-800"
          : " flex flex-col  h-screen"
      }
    >
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1
            className={
              darkMode
                ? " text-xl md:text-3xl font-bold text-yellow-500"
                : " text-xl md:text-3xl font-bold text-[#d02a3a]"
            }
          >
            You have not added your favorites yet!
          </h1>
          <div className=" flex justify-center">
            <Link to={"/menu"}>
              <button className=" px-6 py-1 rounded-md text-white bg-[#d02a3a] text-lg md:text-2xl">
                Back To Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;
