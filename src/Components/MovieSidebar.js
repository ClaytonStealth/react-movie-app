import { Link } from "react-router-dom";

const MovieSidebar = (props) => {
  const { movieList } = props;
  return (
    <div className='movie-sidebar'>
      <h2>Movie Sidebar</h2>
      {movieList.map((movieItem, index) => {
        return (
          <Link key={index} to={`/movies/${movieItem.Title}`}>
            {movieItem.Title}
          </Link>
        );
      })}
    </div>
  );
};

export default MovieSidebar;
