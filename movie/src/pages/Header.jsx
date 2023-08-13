import { NavLink } from "react-router-dom";
export const Header = () =>{
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
      placeholder="Search movies by title, cast and director"
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