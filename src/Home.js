import React from 'react';
import requests from './request';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';
import "./Home.css"


function Home() {
  return (
    <div className="app">
    <Navbar/>
    <Banner />

   < Row title=" MOVIES ORIGINALS " fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
   < Row title=" Trending Now " fetchUrl={requests.fetchTrending} />
   < Row title=" Top Rated " fetchUrl={requests.fetchTopRated} />
   < Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
   < Row title=" Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
   < Row title=" Horror Movies " fetchUrl={requests.fetchHorrorMovies} />
   < Row title=" Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
   < Row title=" Documentaries " fetchUrl={requests.fetchDocumentaries} />
  
  <Footer/>

  </div>
  )
}

export default Home