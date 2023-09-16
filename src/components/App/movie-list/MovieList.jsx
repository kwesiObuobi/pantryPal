import './movie-list.css';

const MovieList = ({movies}) => {
  const IMAGEURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="container list-div">
      <h2>Featured Movie</h2>

      <div className="container movies-list">

        {
          movies.results.slice(3, 13).map((movie) => {
            return (
            <div
              key={movie.id}
              className="movie-card"
              data-testid="movie-card"
            >
              <div className="card-poster-div" data-testid="movie-poster">
                <img src={`${IMAGEURL}/${movie.poster_path}`} alt="" />
              </div>
              <p className="title" data-testid="movie-title">{movie.title}</p>
              <p className="release-date" data-testid="movie-release-date">{movie.release_date}</p>
            </div>
            )})
        }
      </div>
    </div>
  )
}

export default MovieList;
