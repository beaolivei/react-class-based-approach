import React from "react";
import ReactDOM from "react-dom/client";
import ClassCounter from "./components/Counter/ClassCounter";
import { FunctionalCounter } from "./components/Counter/FunctionalCounter";
import SearchMoviesClass from "./components/SearchMovies/ClassSearchMovies";
import FunctionalSearchMovies from "./components/SearchMovies/FunctionalSearchMovies";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <FunctionalCounter header="Functional Counter" />
      <ClassCounter header="Class Counter" />
      <FunctionalSearchMovies />
      <SearchMoviesClass />
    </div>
  </React.StrictMode>
);
