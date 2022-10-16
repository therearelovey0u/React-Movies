function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src={poster} />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          <span>{year}</span> <span>{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
