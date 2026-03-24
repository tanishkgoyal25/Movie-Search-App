import React from "react";

export default function Card(props) {
     return (
          props.movie.map((Movie) => {
               return (
                    <div key={Movie.id} className="w-[250px] h-[375px] rounded-[25px] relative overflow-hidden cursor-pointer group">
                         <img src={Movie.poster_path ? `https://image.tmdb.org/t/p/w500${Movie.poster_path}` : "https://placehold.co/250x375"} className="w-full h-full object-cover transition duration-1000 group-hover:scale-125" />

                         <div className="w-full flex items-center justify-end absolute top-0 left-0 p-[25px]">
                              <span className="w-[50px] h-[25px] bg-yellow-500 text-[12.5px] text-black rounded-full flex items-center justify-center">
                                   ⭐ {Movie.vote_average.toFixed(1)}
                              </span>
                         </div>

                         <div className="w-full h-full bg-black/75 absolute top-0 left-0 opacity-0 p-[25px] flex justify-between flex-col transition duration-1000 group-hover:opacity-100">
                              <div className="flex flex-col">
                                   <h1 className="text-[25px] font-bold text-white text-center mb-2.5">{Movie.title}</h1>
                                   <p className="text-[12.5px] font-medium text-white text-justify line-clamp-5">{Movie.overview}</p>
                              </div>

                              <div className="flex items-center justify-between text-[12.5px] font-bold text-white py-2.5">
                                   <span>{Movie.release_date}</span>
                                   <span>{Movie.original_language.toUpperCase()}</span>
                              </div>
                         </div>
                    </div>
               )
          })
     )
}