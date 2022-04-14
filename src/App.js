import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";
import Home from "./components/Home";
import TvShows from "./components/TvShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/details/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
      <MyFooter />
    </BrowserRouter>
  );
};

export default App;
