import React from 'react'
import './App.css';
import Row from './Row';
import request from './Requests';
import Banner from './Banner';

function App()  {
  return (
    <div className="app">
       <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL = {request.fetchNetflixOriginals} isLargeRow/>
      <Row title="TRENDING" fetchURL={request.fetchTrending}/>
      <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries}/>
    </div>
  )
}

export default App;