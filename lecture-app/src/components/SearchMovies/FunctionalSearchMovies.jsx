import { useEffect, useState } from "react";

export default function FunctionalSearchMovies(props) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((result) => result.json())
      .then((data) => setMovies([...data]));
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.search.value);
  };

  return (
    <div>
      <h1> Search TV Shows: </h1>
      <form onSubmit={handleSubmit}>
        <input name="search" />
        <button type="submit"> SEARCH</button>
      </form>
      <ul>
        {movies.length> 0 && movies.map((item, index) => (
          <li key={index}>{item.show.name}</li>
        ))}
      </ul>
    </div>
  );
}
