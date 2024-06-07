import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Pagintation from "./components/Pagintation";

function App() {
  const [count, setCount] = useState(0);
  const [val, setval] = useState("");

  let handlechange = (e) => {
    setval(e.target.value);
  };
  let incrementcount = () => {
    setCount(count + 1);
  };

  // useEffect(()=>{
  //   console.log('Use Effect Runs')
  //   document.title = `button clicked for ${count} times`
  // })
  useEffect(() => {
    console.log("Use Effect Runs");
    document.title = `button clicked for ${count} times`;
  }, [count]);
  let [watchlist, setwatchlist] = useState([]);
  let handleaddto = (movieobj) => {
    let newwatchlist = [...watchlist, movieobj];
    localStorage.setItem("moviesapp", JSON.stringify(newwatchlist));
    setwatchlist(newwatchlist);
    //console.log(newwatchlist)
  };
  let handlefilterremove = (movieobj) => {
    let filteredwatchlist = watchlist.filter((movie) => {
      return movie.id != movieobj.id;
    });

    setwatchlist(filteredwatchlist);
    localStorage.setItem("moviesapp", JSON.stringify(filteredwatchlist));

    //console.log(watchlist)
  };

  useEffect(() => {
    let moviesfromlocal = localStorage.getItem("moviesapp");
    if (!moviesfromlocal) {
      return;
    }
    setwatchlist(JSON.parse(moviesfromlocal));
  }, []);

  console.log(watchlist);
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />{" "}
                <Movies
                  handleaddto={handleaddto}
                  handlefilterremove={handlefilterremove}
                  watchlist={watchlist}
                />{" "}
              </>
            }
          />
          <Route
            path="/Watchlist"
            element={
              <Watchlist watchlist={watchlist} setwatchlist={setwatchlist} handlefilterremove={handlefilterremove} />
            }
          />
        </Routes>
      </BrowserRouter>

      <h1>The increament Function is </h1>
      <h2>The count is : {count}</h2>
      <input onChange={handlechange} type="text" value={val}></input>
      <h2>{val}</h2>
      <button onClick={incrementcount}>Increament</button>
    </>
  );
}

export default App;
