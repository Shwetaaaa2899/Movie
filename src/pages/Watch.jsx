import { useEffect, useState } from "react";
import {Header} from "./Header"
import { NavLink } from "react-router-dom";
import {usePostsConext } from "./context"

export const WatchListPage = () => {
  
const {state:{movies},dispatch,state }=usePostsConext()
console.log("s is",state)
const [input,setInput] = useState("")
const inputHandler = (e) =>{
   setInput(e.target.value)
}
const data = movies.filter((item) => item.watch)
const showdata = input !== ""?data.filter((item) => 
item.title.toLowerCase().includes(input.trim().toLowerCase())
||
item.cast.some((each)=> each.trim().toLowerCase().includes(input.trim().toLowerCase()))
||
item.director.toLowerCase().includes(input.trim().toLowerCase())
)
:data


useEffect(()=>{
    dispatch({type:"SAVE-CURRENT-CHANGES"})
  
},[movies])
  return   <div>
 <div className="header">
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
      onChange = {inputHandler}
    
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
  <div className="card-container">
  {
    showdata.length === 0 &&
    <div>
      <h3>No watchLists created yet</h3>  
    </div>
  }
  {
    showdata.length>0 &&
    showdata?.map((item) => <div className="card">
<div className="image">
<img src={item.imageURL} /> </div>
<div className="content">


<div><h3>{item.title}</h3> </div>
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
{item?.watch?"Remove From WatchList":"Add to WatchList"}</button>
</div>

 </div>
    </div>)
  }


  </div>;
  </div> 
};
