import { useEffect, useState } from 'react';
import './App.css';
import Headline from './components/App/headline/Headline';

function App() {
  const [movies, setMovies] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTUyYmFjYzM2MDlkZGE1ZTBkMWZjN2I3MTAyMWIxYiIsInN1YiI6IjY1MDE3ZjI5MWJmMjY2MDBjNWQ2NWYyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gtjGoyNC3GdOiT5p733uXPgyb4ZB3eFOB7IjBGhsjrY'
      }
    };
  
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setMovies(response))
    .catch(err => setError(err));
   }, []);

   if (error) {
    return (<h1>{error}</h1>)
   }

   if (!movies || !movies.results || movies.results.length === 0) {
    return (<h1>Loading...</h1>)
   }

  return (
    <div className="App">
      <Headline movie={movies.results[0]} />
    </div>
  )
}

export default App;
