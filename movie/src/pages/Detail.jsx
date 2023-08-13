import { useState } from "react";
import { useParams } from "react-router-dom";
import {usePostsConext } from "./context"
import { useMovie } from "./context";
import { Header } from "./Header";
import "./Detail.css"
export const Detail = () => {
    const {state:{movies},dispatch }=usePostsConext()
  const { id } = useParams();
 const data = movies.find((item) => item.id === parseInt(id))
 console.log(data)
  return <div>
    <Header />
{

    data && <div className="detail-container-wrapper">
        <div className="left-side-image">
            <img src = {data.imageURL} />
        </div>
        <div className="detail-content" >
            <h2>{data.title}</h2>

            <ul>
                <li><p>{data.summary}</p></li>
                <li><p>Year: {data.year}</p></li>
                <li><p>Rating: {data.rating}</p></li>
                <li><p>Director :{data.director}</p></li>
                <li><p>Writer :{data.writer}</p></li>
                <li><p>Cast :
                <div>
                {data.cast.map((name) => <li>{name}</li>)}
                </div></p></li>
            </ul>
        </div>
    </div>
}
    
  </div>;
};
