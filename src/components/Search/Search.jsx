import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "",
  };

  handleKey = (event) => {
    if (event.keyCode === 13) {
      this.props.searching(this.state.search, this.state.type);
    }
  };

  handleChekedBox = (event) => {
    this.setState(
      () => ({ [event.target.name]: event.target.value }),
      () => {
        this.props.searching(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <input
            placeholder="Search"
            id="email_inline"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyUp={this.handleKey}
          />
        </div>
        <div className="types">
          <p>
            <label>
              <input
                name="type"
                type="radio"
                value="all"
                onChange={this.handleChekedBox}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="type"
                type="radio"
                value="movie"
                onChange={this.handleChekedBox}
              />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="type"
                type="radio"
                value="series"
                onChange={this.handleChekedBox}
              />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}

export { Search };
