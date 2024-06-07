import React from "react";

function Moviecard({
  movieobj,
  poster_path,
  original_title,
  handleaddto,
  handlefilterremove,
  watchlist,
}) {
  function doescontain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieobj.id) {
        //console.log(movieobj)
        return true
      }
      
    }
    return false
  }
  return (
    <div
      className="h-[40vh] w-[180px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110   duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doescontain(movieobj) ? (
        <div
          className="flex justify-center m-2"
          onClick={() => handlefilterremove(movieobj)}
        >
          &#128064;
        </div>
      ) : (
        <div
          className="flex justify-center m-2"
          onClick={() => handleaddto(movieobj)}
        >
          &#128525;
        </div>
      )}

      <div>
        {" "}
        <h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </h2>
      </div>

      <div className="text-white text-xl text-center rounded-sm w-[180px] bg-gray-900/60 rounded-xl">
        {original_title}
      </div>
    </div>
  );
}

export default Moviecard;
