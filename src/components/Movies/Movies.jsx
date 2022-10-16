import { Movie } from "./Movie";

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((card) => {
          return <Movie key={card.imdbID} {...card} />;
        })
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { Movies };
