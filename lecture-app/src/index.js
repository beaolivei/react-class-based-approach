import React from "react";
import ReactDOM from "react-dom/client";
import { ClassCounter }  from "./components/counter/ClassCounter";
import FunctionalCounter from "./components/counter/FunctionalCounter";
import { ClassSearch } from "./components/counter/search-api/ClassSearch";
import FunctionalSearch from "./components/counter/search-api/FunctionalSearch";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FunctionalCounter title="Functional Counter"/>
    <ClassCounter title = "Class Counter"/>
    <FunctionalSearch title="Functional Search"/>
    <ClassSearch title = "Class Search"/>
  </React.StrictMode>
);
