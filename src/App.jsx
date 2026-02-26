import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";

export default function App() {
     const [movies, setMovies] = useState([]);
     const [search, setSearch] = useState("");

     const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
     const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

     async function Movies(url) {
          const response = await fetch(url);
          const data = await response.json();
          setMovies(data.results);
     }

     useEffect(() => {
          if (search.trim() === "") {
               Movies(API);
          } else {
               Movies(SEARCH_API + search);
          }
     }, [search]
     );

     return (
          <>
               <Header search={search} setSearch={setSearch} />
               <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-2.5">
                    <Card movies={movies} />
               </div>
          </>
     )
}