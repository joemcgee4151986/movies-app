import React from 'react';


export default function Searchmovies(){
    return(
            <div>
                <form className="Form">
                    <label className="label"
                    htmlFor="query"> Movies 
                    </label>
                    <input className="input" type="text" name="query" placeholder="Search"></input>
                    <button className = "button-submit" type = "submit">Submit</button>
                </form>
                
            </div>
    )
}