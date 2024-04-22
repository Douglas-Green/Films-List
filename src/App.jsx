/** @format */

import React, { Component } from "react";
import FilmsList from "./components/FilmsList";
import Modal from "./components/modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [
        { id: 1, title: "Film Title 1", description: "Description here..." },
        { id: 2, title: "Film Title 2", description: "Description here..." },
      ],
      selectedFilm: null,
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  handleFilmSelect = film => {
    this.setState({ selectedFilm: film, showModal: true });
  };

  render() {
    const { films, selectedFilm, showModal } = this.state;
    return (
      <div>
        <FilmsList
          films={films}
          onFilmSelect={this.handleFilmSelect}
        />
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={this.toggleModal}>
            <h2>{selectedFilm ? selectedFilm.title : "No Film Selected"}</h2>
            <p>
              {selectedFilm
                ? selectedFilm.description
                : "No description available."}
            </p>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
