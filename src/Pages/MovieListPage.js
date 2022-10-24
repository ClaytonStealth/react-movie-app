import MovieCard from "../Components/MovieCard";

const MovieListPage = (props) => {
  const { movieList } = props;
  return (
    <div>
      <h1></h1>
      <div className='movie-list'>
        {movieList.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MovieListPage;
