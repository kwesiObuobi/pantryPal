import { useParams, Link } from 'react-router-dom';
import './details.css';
import { useEffect, useState } from 'react';

const Details = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();

  const IMAGEURL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTUyYmFjYzM2MDlkZGE1ZTBkMWZjN2I3MTAyMWIxYiIsInN1YiI6IjY1MDE3ZjI5MWJmMjY2MDBjNWQ2NWYyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gtjGoyNC3GdOiT5p733uXPgyb4ZB3eFOB7IjBGhsjrY'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => setError(err));
  }, [id]);

  if (error) {
    return (<h1>{error}</h1>)
  }

  if (!movie) {
    return (<div className="spinner"><h1>Loading...</h1></div>)
  }

  return (
    <div className="details-div">
      <div className="back-div">
        <Link to='/' className="back">Back to movies</Link>
      </div>

      <div className="detail-img-box">
        <img src={`${IMAGEURL}/${movie.backdrop_path}`} alt="movie backdrop" />
      </div>
      <div className="detail-head">
        <span data-testid="movie-title">{movie.title} •</span>
        <span data-testid="movie-release-date">{new Date(movie.release_date).getFullYear()} •</span>
        <span data-testid="movie-runtime">{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
      </div>
      <div className="detail-overview" data-testid="movie-overview">
        {movie.overview}
      </div>
    </div>
  )
}

export default Details
