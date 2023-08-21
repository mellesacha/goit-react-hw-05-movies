import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Cast from "../pages/Cast";
import Reviews from "../pages/Reviews";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movies />}>
            <Route path="cast" element={<Cast/> } />
            <Route path="reviews" element={<Reviews/> } />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
