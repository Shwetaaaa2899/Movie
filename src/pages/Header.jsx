import { NavLink } from "react-router-dom";
import { usePostsConext } from "./context";
import { useState } from "react";
export const Header = () =>{
  // const {dispatch} = usePostsConext()
  const { state, dispatch} = usePostsConext()
  console.log(state)
  const [input,setInput] = useState("")
  const inputHandler = (e) =>{
     setInput(e.target.value)
  //    console.log(state)
    dispatch({type:"SEARCH-DATA",payload:input})
  
  }
    return <div className="header">
<div className="logo">
 <NavLink to ="/">
  <h1>IMDB</h1>
  </NavLink>
</div>
<div className="search-bar">
  <span className="search-bar-span">
    <input
      type="text"
      onChange = {inputHandler}
      placeholder="Search movies by title, cast and director"
      onChange = {(e)=>    dispatch({type:"SEARCH",payload:e.target.value})}
    />
  </span>
</div>
<div className="side-nav">
  <div>Movies</div>
  <div>
  <NavLink to = "/watchlist">
  Watch List
  </NavLink></div>
  <div>Starred Movies</div>
</div>
</div>
}