import React from "react";
import { useEffect, useState } from "react";
import genreid from "../Utility/Genres";
function Watchlist({ watchlist, setwatchlist, handlefilterremove }) {
  const [search, setsearch] = useState("");
  const [genrelist, setgenrelist] = useState([]);
  const [currgenre, setcurrgenre] = useState("All genres");
  let handlesearch = (e) => {
    setsearch(e.target.value);
  };

  let handlefilter = (genre) => {
    setcurrgenre(genre);
  };

  let sortincreasing = () => {
    let sortedincreasing = watchlist.sort((movieA, movieb) => {
      return movieA.vote_average - movieb.vote_average;
    });
    setwatchlist([...sortedincreasing]);
  };

  let sortdecreasing = () => {
    let sorteddecreasing = watchlist.sort((movieA, movieb) => {
      return movieb.vote_average - movieA.vote_average;
    });
    setwatchlist([...sorteddecreasing]);
  };

  let sortincreasingpop = () => {
    let sortedincreasingpop = watchlist.sort((movieA, movieb) => {
      return movieA.popularity - movieb.popularity;
    });
    setwatchlist([...sortedincreasingpop]);
  };

  let sortdecreasingpop = () => {
    let sorteddecreasingpop = watchlist.sort((movieA, movieb) => {
      return movieb.popularity - movieA.popularity;
    });
    setwatchlist([...sorteddecreasingpop]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieobj) => {
      return genreid[movieobj.genre_ids[0]];
    });
    temp = new Set(temp);
    setgenrelist(["All genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 ">
        {genrelist.map((genre) => {
          if (genre != undefined) {
            return (
              <div
                onClick={() => handlefilter(genre)}
                className={
                  currgenre == genre
                    ? "bg-gray-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center m-4"
                    : "bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center m-4"
                }
              >
                {genre}
              </div>
            );
          }
        })}

        {/* <div className="bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center m-4">
          Action
        </div>
        <div className="bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center m-4">
          Action
        </div> */}
      </div>
      <div className="flex justify-center">
        <input
          onChange={handlesearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-300  outline-none px-4"
        />
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-200 m-12">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-4">
            <tr>
              <th>Name</th>
              <th>
                <div className="p-2" onClick={sortincreasing}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2" onClick={sortdecreasing}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>
                <div className="p-2" onClick={sortincreasingpop}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div>Popularity</div>
                <div className="p-2" onClick={sortdecreasingpop}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieobj) => {
                if (currgenre == "All genres") {
                  return true;
                } else {
                  return genreid[movieobj.genre_ids[0]] == currgenre;
                }
              })
              .filter((movieobj) => {
                return movieobj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieobj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieobj.poster_path}`}
                      />
                      <div className="mx-10">{movieobj.title}</div>
                    </td>
                    <td>{movieobj.vote_average}</td>
                    <td>{movieobj.popularity}</td>
                    <td>{genreid[movieobj.genre_ids[0]]}</td>
                    <td>
                      <button onClick={() => handlefilterremove(movieobj)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
