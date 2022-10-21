import { Link } from "react-router-dom";

const MovieSidebar = (props) => {
  const { movieList } = props;
  return (
    <div className='movie-sidebar'>
      <h2 className='sidebar-title'>Movie Sidebar</h2>
      {movieList.map((movieItem, index) => {
        return (
          <Link
            key={index}
            to={`/movies/${movieItem.Title}`}
            style={{ textDecoration: "underline", fontSize: "1.7rem" }}
          >
            {movieItem.Title}
          </Link>
        );
      })}
    </div>
  );
};

export default MovieSidebar;
