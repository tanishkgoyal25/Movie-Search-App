import React from "react";

export default function Card(props) {
     return (
          <>
               {
                    props.movies.map((movie) =>
                    (
                         <div key={movie.id} className="group w-[250px] h-[375px] rounded-[25px] overflow-hidden relative cursor-pointer m-5" >
                              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover scale-100 group-hover:scale-125 transition duration-500" />

                              <div className="bg-black/75 absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 p-2.5 flex flex-col">
                                   <h1 className="text-[25px] font-medium text-white text-center py-2.5">{movie.title}</h1>

                                   <p className="text-[12.5px] font-normal text-white line-clamp-5">{movie.overview}</p>

                                   <div className="flex items-center justify-between">
                                        <div className="bg-yellow-500 border border-black rounded-full flex items-center justify-center gap-[2.5px] px-[2.5px]">
                                             <div>
                                                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B89230">
                                                       <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                                  </svg>
                                             </div>

                                             <div className="text-[12.5px] font-normal text-white text-center">{movie.vote_average.toFixed(1)}</div>
                                        </div>

                                        <span className="text-[12.5px] font-normal text-white text-center">{movie.release_date?.split("-")[0]}</span>
                                   </div>
                              </div>
                         </div >
                    )
                    )
               }
          </>
     )
}