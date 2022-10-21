import { useState } from "react";

const MovieFormPage = (props) => {
  const { handleAddMovie } = props;

  const [title, setTitle] = useState("");
  return (
    <div>
      <h1> Movie Form Page</h1>
      <label>Input Movie Title</label>
      <br />
      <input
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleAddMovie(title);
        }}
      >
        Add Movie
      </button>
    </div>
  );
};

export default MovieFormPage;
