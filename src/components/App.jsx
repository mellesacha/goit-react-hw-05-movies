import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieCard from "../pages/MovieCard";
import { lazy } from "react";

export const App = () => {

const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import('./Reviews'));

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieCard />}>
            <Route path="cast" element={<Cast/> } />
            <Route path="reviews" element={<Reviews/> } />
          </Route>
        </Route>
      </Routes>
  );
};
