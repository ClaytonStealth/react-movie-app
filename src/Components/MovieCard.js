const MovieCard = (props) => {
  const { movie } = props;
  const min = 0;
  const max = movie.Images.length;
  const range = (max, min) => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  };
  return (
    <div className='movie-list-card'>
      <h2>{movie.Title}</h2>
      {movie.Director !== "N/A" ? <p>{movie.Director}</p> : <p></p>}
      <img src={movie.Images[range(max, min)]} alt={movie.Title} />
    </div>
  );
};

export default MovieCard;
