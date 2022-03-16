import React,{useState} from 'react';
import Fade from 'react-reveal/Fade';

export default function Searchmovies(){
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const Searchmovies = async(e) =>{
        e.preventDefault(); //prevents the link from appearing
       
       
        const url= `https://api.themoviedb.org/3/search/movie?api_key=cef4c4b7f7940103893a439035dd85df&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
        const res = await fetch(url);
        const data  = await res.json();
        console.log(data.results);
        setMovies(data.results);
        }catch(err){
            console.error(err);
        }
}
    return(
        <>
            <div>
                <form className="Form" onSubmit={Searchmovies}>
                    <label className="label"
                    htmlFor="query"> Find a movie
                    </label>
                    <input className="input" type="text" name="query" placeholder="Search" value = {query} onChange={(e) =>setQuery(e.target.value)}></input>
                    <button className = "button-submit" type = "submit">Submit</button>
                </form>
                <div className="movies-list"></div>
                
               {movies.filter (movie => movie.poster_path).map(movie => (
                    <div className = "movies" key={movie.id}>
                        <Fade Top>
                    <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt = {movie.title + ' poster'}
                     />
                    
                     
                     <div className= "movies--content">
                         
                         <h3 className= "movies--title">{movie.title}</h3>
                         <p><small>Release Date: {movie.release_date}</small></p>
                         <p><small>Rating: {movie.vote_average}</small></p>
                         <p className = "movies--desc">{movie.overview}
                        
                         </p>
                        
                         </div>
                         </Fade>
                     </div>
                   
                ))}

            </div>
            
        </>
    )
}