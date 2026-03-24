import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import Card from "./Component/Card";

export default function App() {
     const [movie, setMovie] = useState([]);
     const [search, setSearch] = useState("");

     const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
     const SearchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

     const Movies = async (URL) => {
          const Response = await fetch(URL);
          const Data = await Response.json();
          setMovie(Data.results);
     }

     useEffect(() => {
          const Delay = setTimeout(() => {
               if (search) {
                    Movies(SearchAPI + search);
               } else {
                    Movies(API);
               }
          }, 1000);

          return () => clearTimeout(Delay);
     }, [search]
     );

     return (
          <>
               <Header setSearch={setSearch} />
               <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-[25px] p-[25px]">
                    <Card movie={movie} />
               </main>
          </>
     )
}