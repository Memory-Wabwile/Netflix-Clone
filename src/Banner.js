import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        // just gets one of the movies randomly
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header className="banner" >
      <div className="banner_contents">

      </div>
    </header>
  );
}

export default Banner;
