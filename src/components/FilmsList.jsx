/** @format */

import React, { Component } from "react";
import "./FilmsList.css";

class FilmsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selectedFilm: null, // State to hold the selected film details
    };
  }

  componentDidMount() {
    this.getFilms();
  }

  selectFilm = film => {
    this.setState({ selectedFilm: film });
  };

  getFilms = () => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then(response => response.json())
      .then(data => this.setState({ list: data }))
      .catch(error => console.error("Error: failed to fetch films", error));
  };

  renderFilmDetails = () => {
    const { selectedFilm } = this.state;
    return (
      <div className='filmDetails'>
        <h2>{selectedFilm.title}</h2>
        <p>{selectedFilm.description}</p>
        <p>
          <strong>Director:</strong> {selectedFilm.director}
        </p>
        <p>
          <strong>Producer:</strong> {selectedFilm.producer}
        </p>
        <p>
          <strong>Release Date:</strong> {selectedFilm.release_date}
        </p>
        <p>
          <strong>Running Time:</strong> {selectedFilm.running_time} minutes
        </p>
        <p>
          <strong>Rotten Tomatoes Score:</strong> {selectedFilm.rt_score}%
        </p>
        <button onClick={() => this.setState({ selectedFilm: null })}>
          Back to list
        </button>
      </div>
    );
  };

  render() {
    const { list, selectedFilm } = this.state;

    return (
      <div className='container'>
        <h1 className='header'>Studio Ghibli Films</h1>
        {selectedFilm ? (
          this.renderFilmDetails()
        ) : (
          <ul className='list'>
            {list.map(film => (
              <li
                key={film.id}
                className='listItem'
                onClick={() => this.selectFilm(film)}>
                {film.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default FilmsList;
