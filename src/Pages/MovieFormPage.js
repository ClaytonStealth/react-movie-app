import { useState } from "react";

const MovieFormPage = (props) => {
  const { handleAddMovie } = props;

  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [rated, setRated] = useState("");
  const [released, setReleased] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genre, setGenre] = useState("");
  const [writer, setWriter] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [awards, setAwards] = useState("");
  const [metascore, setMetascore] = useState(0);
  const [imdbRating, setImdbRating] = useState(0);
  const [imdbVotes, setImdbVotes] = useState("");
  const [imdbID, setImdbID] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  return (
    <div>
      <h1> Movie Form Page</h1>
      <label>Input Movie Title</label>
      <br />
      <input
        placeholder='Input Movie Title'
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Director'
        type='text'
        onChange={(e) => {
          setDirector(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Year'
        type='text'
        onChange={(e) => {
          setMovieYear(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Parental Rating'
        type='text'
        onChange={(e) => {
          setRated(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Release Date'
        type='text'
        onChange={(e) => {
          setReleased(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Runtime'
        type='text'
        onChange={(e) => {
          setRuntime(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Genre'
        type='text'
        onChange={(e) => {
          setGenre(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Writer'
        type='text'
        onChange={(e) => {
          setWriter(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Actors'
        type='text'
        onChange={(e) => {
          setActors(e.target.value);
        }}
      ></input>
      <br />
      <textarea
        placeholder='Input Movie Plot'
        type='text'
        onChange={(e) => {
          setPlot(e.target.value);
        }}
      />
      <br />
      <input
        placeholder='Input Movie Language'
        type='text'
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Country of Origin'
        type='text'
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Awards'
        type='text'
        onChange={(e) => {
          setAwards(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Metascore'
        type='number'
        onChange={(e) => {
          setMetascore(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie  ImdbRating'
        type='number'
        onChange={(e) => {
          setImdbRating(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input IMDB ID'
        type='text'
        onChange={(e) => {
          setImdbID(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Type'
        type='text'
        onChange={(e) => {
          setType(e.target.value);
        }}
      ></input>
      <br />
      <input
        placeholder='Input Movie Image'
        type='text'
        onChange={(e) => {
          setImage(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={() => {
          handleAddMovie(
            title,
            director,
            movieYear,
            rated,
            released,
            runtime,
            genre,
            writer,
            actors,
            plot,
            language,
            country,
            awards,
            metascore,
            imdbRating,
            imdbVotes,
            imdbID,
            type,
            image
          );
        }}
      >
        Submit Movie
      </button>
    </div>
  );
};

export default MovieFormPage;

// Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "890,617",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//     Images:
