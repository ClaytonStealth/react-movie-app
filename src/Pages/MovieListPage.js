import MovieCard from "../Components/MovieCard";

const MovieListPage = (props) => {
  const { movieList } = props;
  return (
    <div>
      <h1></h1>
      <div className='movie-list'>
        {movieList.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieListPage;
