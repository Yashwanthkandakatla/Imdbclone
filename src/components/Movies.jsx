import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagintation from "./Pagintation";
function Movies({ handleaddto, handlefilterremove, watchlist }) {
  const [movies, setmovies] = useState([]);
  const [pageno, setpageno] = useState(1);

  const handleprev = () => {
    if (pageno === 1) {
      setpageno(pageno);
    } else {
      setpageno(pageno - 1);
    }
  };
  const handlenext = () => {
    setpageno(pageno + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=351c7db32671deb8d28ab75b8d22cf02&language=en-US&page=${pageno}`
      )
      .then(function (res) {
        setmovies(res.data.results);
        //console.log(res.data.results);
      });
  }, [pageno]);

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex flex-row justify-around flex-wrap ">
        {movies.map((movieobj) => {
          return (
            <Moviecard
              poster_path={movieobj.poster_path}
              original_title={movieobj.original_title}
              handleaddto={handleaddto}
              handlefilterremove={handlefilterremove}
              movieobj={movieobj}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagintation
        handlenext={handlenext}
        handleprev={handleprev}
        pageno={pageno}
      />
    </div>
  );
}

export default Movies;
