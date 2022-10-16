import { Component } from "react";
import { Movies } from "../components/Movies/Movies";
import { Search } from "../components/Search/Search";
import { Preloader } from "./Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  }

  searching = (value, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="content">
        <div className="container">
          <Search searching={this.searching} />
          {loading ? <Preloader /> : <Movies movies={movies} />}
        </div>
      </main>
    );
  }
}

export { Main };
