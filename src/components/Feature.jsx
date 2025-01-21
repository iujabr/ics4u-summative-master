import { useEffect, useState } from 'react';

function Feature() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=9c47bbe2d7088241e1ab950419637754&language=en-US'
      );
      const data = await response.json();
      setMovies(data.results.slice(0, 3)); // Get only the top 3 movies
    }
    fetchMovies();
  }, []);

  return (
    <section className="features">
      <h2>Top Picks for the Month!</h2>
      <div className="movie-gallery">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <button>Rent Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;