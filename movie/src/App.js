import logo from './logo.svg';
import './App.css';
import { Home } from "./pages/Home";
import { WatchListPage } from "./pages/Watch";
import { Routes, Route, Router, NavLink } from "react-router-dom";
import {Detail} from "./pages/Detail"
function App() {
  return (
 
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watchlist" element={<WatchListPage />} />
      <Route path="/movie/:id" element={<Detail />} />
      {/* <Route path="/starred" element={<StarPage />} />
      <Route path="/watchlist" element={<WatchListPage />} /> */}
  </Routes> 
  </div>
  );
}

export default App;
