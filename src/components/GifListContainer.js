import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = "cats") => {
    // You can replace 'cats' with any default search query
    const apiKey = "YOUR_GIPHY_API_KEY";
    const url =
      "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=O072AQ6zP2ZGKkyZbJWCXoVB4brJKTn9&rating=g";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          gifs: data.data.slice(0, 3), // Store first 3 gifs in state
        });
      })
      .catch((error) => console.error("Error fetching gifs: ", error));
  };

  handleSearchSubmit = (query) => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
