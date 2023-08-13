import "./Home.css";

// import { NavLink } from "react-router-dom";
// import { inventoryData } from "../src/db";
import { useEffect } from "react";
import {usePostsConext } from "./context"
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export const Home = () => {
//   const navigate = useNavigate();
const {state:{movies},dispatch }=usePostsConext()
const [showdata,setShowData] = useState(movies)

const [input,setInput] = useState("")
const inputChangeHandler = (e) =>{
    setInput(e.target.value)
    // console.log(input)
}
// console.log(state)
const [leftcategory, setCategory] = useState("all");
const handleCatgeoryChange = (e) => {
  setCategory(e.target.value);
};
const [yearCategory, setRightCategory] = useState("all");
const handleYearCatgeoryChange = (e) => {
  setRightCategory(e.target.value);
};
const [ratingCategory , setRatingCategory] = useState("all")
const handleRatingCatgeoryChange = (e) => {
    
    setRatingCategory(e.target.value);
    // console.log(ratingCategory)
  };
  const SearchBasedFiltereddata = input !== ""?showdata.filter((item) => 
  item.title.toLowerCase().includes(input.trim().toLowerCase())
  ||
  item.cast.some((each)=> each.trim().toLowerCase().includes(input.trim().toLowerCase()))
  ||
  item.director.toLowerCase().includes(input.trim().toLowerCase())
  )
  :showdata

  const  categoryWisedata = leftcategory !== "all"?
  showdata.filter((item) => item.genre.includes(leftcategory) )

  :SearchBasedFiltereddata


  const  yearWisedata = yearCategory !== "all"?
  categoryWisedata.filter((item) => item.year === parseInt(yearCategory)  )

  :categoryWisedata
  const ratingWisedata =ratingCategory !== "all"? 
  yearWisedata.filter((item) => item.rating ===  parseInt(ratingCategory)  )
// yearWisedata
   :yearWisedata
  useEffect(()=>{
    dispatch({type:"SAVE-CURRENT-CHANGES"})
    setShowData(movies)
 

  },[movies, dispatch])
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <h1>IMDB</h1>
        </div>
        <div className="search-bar">
          <span className="search-bar-span">
            <input onChange = {inputChangeHandler}
              type="text"
              placeholder="Search movies by title, cast and director"
            />
          </span>
        </div>
        <div className="side-nav">
          <div>
          <NavLink to = "/">
          <li>
          Movies
          </li>
          </NavLink></div>
          <div>
          <NavLink to = "/watchlist">
          <li>    Watch List</li>
      
          </NavLink></div>
          <div>
          <li>
          Starred Movies
          </li></div>
        </div>
      </div>
      ;
     

      <div className="filter-wrapper">
        <div>
        <h3>Movies</h3></div>
        {/* //drama */}
        <div>
              <select value={leftcategory} onChange={handleCatgeoryChange}>
                <option value="all">All Genre</option>

                <option value="Drama">Drama</option>

                <option value="Action">Action</option>

                <option value="Sci-Fi">Sci-Fi</option>
                
                <option value="Biography">Biography</option>
                
                <option value="Crime">Crime</option>
                
                <option value="Drama">Drama</option>
                  
                  
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                
              </select>
            </div> 
            {/* release yr */}
            <div>
              <select
                value={yearCategory}
                onChange={handleYearCatgeoryChange}
              >
                <option value = "all">Release Year</option>

                <option value="1990">1990</option>

                <option value="1991">1991</option>
                <option value="1991">1991</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="2003">2003</option>
                <option value="1994">1994</option>
              </select>
            </div>  
            {/* <p>{categoryWisedata.length}</p> */}
            <div>
            <select
                value={ratingCategory}
                onChange={handleRatingCatgeoryChange}
              >
                <option value = "all" >Rating</option>

                <option value="1">1</option>

                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div>
                <button>Add a Movie</button>
            </div>
      </div>
      <div className="card-container">

{
    ratingWisedata && ratingWisedata.map((item) => 
    <div className="card">
    <NavLink to = {`/movie/${item.id}`}>
<div className="image">
<img src={item.imageURL} /> 
</div>
</NavLink>
<div className="content">


<div><h3>{item.title}</h3> 
<p>rate-{item.rating}</p></div>
<div> <p>
    {item.summary}
</p></div>
<div className="action-btn"> 
<button onClick={()=>item?.starred?
dispatch({type:"UNSTAR-A-MOVIE",payload:item})
:dispatch({type:"STAR-A-MOVIE",payload:item})

}
> 
{item?.starred?"Starred":"Star"}</button>


<button onClick={()=>item?.watch?
dispatch({type:"REMOVE-FROM-WATCHLIST",payload:item})
:dispatch({type:"ADD-TO-WATCHLIST",payload:item})

}
> 
{item?.watch?"Added to WatchList":"Add to WatchList"}</button>
</div>

 </div>
    </div>)
}

      </div>;
    </div>
  );
};
