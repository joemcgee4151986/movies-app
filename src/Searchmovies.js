import React,{useState} from 'react';
import Movietitles from './Movietitles.js'

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
           
                <form className="Form" onSubmit={Searchmovies}>
                    <label className="label"
                    htmlFor="query"> Find a movie
                    </label>
                    <input className="input" type="text" name="query" placeholder="Search" value = {query} onChange={(e) =>setQuery(e.target.value)}></input>
                    <button className = "button-submit" type = "submit">Submit</button>
                </form>
                <div className="movies-list"></div>
               {movies.filter (movie => movie.poster_path).map(movie => (
                   
                        <Movietitles movie={movie} key={movie.id} />
          
                ))}
           
        </>
    )
}