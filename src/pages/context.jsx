
import { useState, createContext, useContext, useReducer } from "react";
import {movies} from "./db"
const  LocalStoargeMovie =   JSON.parse( localStorage.getItem('movies'))
            
const initialState = {
   movies: LocalStoargeMovie?LocalStoargeMovie:
    movies,
    
   
     watchlist: [],
     input:"" ,
     starred: []
    };
const PostReducer = (state, action) => {
  switch (action.type) {
  

    case "ADD-A-MOVIE":
      console.log("post added", action.payload);

      return {
        ...state,
        movies: [...state.movies, action.payload]
      };

    case "UNSTAR-A-MOVIE":
      console.log("post is red", action.payload);
     

      return {
        ...state,
        movies: [...state.movies].map((item) => item.id === action.payload.id?{...item,starred:false}
        :
      item)
      };
    case "STAR-A-MOVIE":
    

    return {
        ...state,
        movies: [...state.movies].map((item) => item.id === action.payload.id?{...item,starred:true}
        :
      item)
      };
      case "ADD-TO-WATCHLIST":
    //   console.log("post added", action.payload);

      return {
        ...state,
        movies: [...state.movies].map((item) => item.id === action.payload.id?{...item,watch:true}
        :
      item)
      };

      case "REMOVE-FROM-WATCHLIST":
        // console.log("post added", action.payload);
  
        return {
          ...state,
          movies: [...state.movies].map((item) => item.id === action.payload.id?{...item,watch:false}
          :
        item)
        };

        case "SAVE-CURRENT-CHANGES":
          console.log("Called")
            const updatedData = [...state.movies]
            localStorage.setItem('movies',JSON.stringify(updatedData))
            return {...state,mmovies:updatedData}
            case "GET-STARRED-LISTS":
               
          
                return {
                  ...state,
                  starred: [...state.movies].filter((movie) => movie.starred)
                };
                case "GET-WATCHLISTS":
               
          
                return {
                  ...state,
                  watchlist: [...state.movies].filter((movie) => movie.watch)
                };

                case "SEARCH-DATA":
                  console.log("search",action.payload)
                  return {
                    ...state,
                    input: action.payload
                  };

    default:
      return state;
  }
  // console.log("data received from conextx",data)
};

export const PostsProviderkey = createContext();
export const usePostsContext = () => useContext(PostsProviderkey);
const PostsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PostReducer, initialState);
  // const[]



  return (
    <PostsProviderkey.Provider
      value={{
        state,

    
        dispatch,
      
      }}
    >
      {children}
    </PostsProviderkey.Provider>
  );
};

export default PostsProvider;
export const usePostsConext = () => useContext(PostsProviderkey);
