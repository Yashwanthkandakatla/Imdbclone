import React from "react";

function Pagintation({ handleprev, handlenext, pageno }) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center ">
      <div
        onClick={handleprev}
        className="px-8 hover:cursor-pointer hover:scale-110 duration-300"
      >
        <i class="fa-solid fa-backward"></i>{" "}
      </div>
      <div className="font-bold">{pageno}</div>

      <div
        onClick={handlenext}
        className="px-8 hover:cursor-pointer hover:scale-110 duration-300"
      >
        <i class="fa-solid fa-forward"></i>{" "}
      </div>
    </div>
  );
}

export default Pagintation;
