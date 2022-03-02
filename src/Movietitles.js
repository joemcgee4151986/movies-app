import React from 'react';

export default function Movietitles({movie}) {
    
    return(
        <div>
              <div className = "movies">
                    <img className= "card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt = {movie.title + ' poster'}
                     />
                     <div className= "movies--content">
                         <h3 className= "movies--title">{movie.title}</h3>
                         <p><small>Release Date: {movie.release_date}</small></p>
                         <p><small>Rating: {movie.vote_average}</small></p>
                         <p className = "movies--desc">{movie.overview}

                         </p>
                         
                         </div>
                     </div>
        </div>

    )
}