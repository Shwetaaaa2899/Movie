import { useEffect, useState } from "react";
import {Header} from "./Header"
import {usePostsConext } from "./context"

export const WatchListPage = () => {
  
const {state:{movies, watchlist},dispatch }=usePostsConext()
console.log(watchlist)
const showdata = movies.filter((item) => item.watch)

useEffect(()=>{
    dispatch({type:"SAVE-CURRENT-CHANGES"})
  
},[movies])
  return   <div>
  <Header />
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
