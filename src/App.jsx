// App.js
import React, { useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //call from api using Axios
  const getMoviesAxios = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      );
      console.log(response.data);
      setMovies(response.data);
    } catch (e) {
      console.log(`error: ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1>Streaming Movies</h1>
        <button onClick={getMoviesAxios} disabled={loading}>
          {loading ? "Loading..." : "Fetch Movies from API"}
        </button>

        <div className="app">
          <div className="row">
            {movies.map((posts) => (
              <div key={posts.id} className="col-3 col-md-4 col-lg-3">
                <div className="card mt-4 ">
                  <img src={posts.Poster} alt="poster" />
                  <h5 className="title">{posts.Title}</h5>
                  <p>Runtime: {posts.Runtime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
