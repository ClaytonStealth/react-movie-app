import { useParams } from "react-router-dom";
const MoviePage = (props) => {
  const { movieList } = props;
  const params = useParams();
  const movie = movieList.find((movie) => {
    return movie.Title === params.title;
  });
  const titleParam = params.title;
  const max = movie.Images.length;
  const min = 0;
  const range = (max, min) => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  };
  console.log(movie.Images);
  return (
    <div>
      <h1>Movie Page</h1>
      {movieList.map((movie, index) => {
        if (movie.Title === titleParam) {
          return (
            <div key={index}>
              <h2>Title: {movie.Title}</h2>
              {movie.Director !== "N/A" ? (
                <p>Director: {movie.Director}</p>
              ) : (
                <p></p>
              )}
              <p>Actors: {movie.Actors}</p>
              <p>Plot: {movie.Plot}</p>
              <p>MovieYear: {movie.Year}</p>
              {movie.Rated !== "N/A" ? <p>Rated: {movie.Rated}</p> : <p></p>}

              <p>Released: {movie.Released}</p>
              {movie.Runtime !== "N/A" ? (
                <p>Runtime: {movie.Runtime}</p>
              ) : (
                <p></p>
              )}

              <p>Genre: {movie.Genre}</p>
              <p>Writer: {movie.Writer}</p>
              <p>Language: {movie.Language}</p>
              <p>Country: {movie.Country}</p>
              {movie.Awards !== "N/A" ? <p>Awards: {movie.Awards}</p> : <p></p>}
              {movie.Metascore !== "N/A" ? (
                <p>Metascore: {movie.Metascore}</p>
              ) : (
                <p></p>
              )}
              {movie.imdbRating !== "N/A" ? (
                <p>imdbRating: {movie.imdbRating}</p>
              ) : (
                <p></p>
              )}
              {movie.imdbVotes !== "N/A" ? (
                <p>imdbVotes: {movie.imdbVotes}</p>
              ) : (
                <p></p>
              )}
              {movie.imdbID !== "N/A" ? <p>imdbID: {movie.imdbID}</p> : <p></p>}
              {movie.Type !== "N/A" ? <p>Type: {movie.Type}</p> : <p></p>}
              {movie.Images !== undefined ? (
                <img src={movie.Images[range(max, min)]} alt='Img' />
              ) : (
                <p></p>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default MoviePage;
