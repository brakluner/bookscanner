import React, { Component } from "react";
import API from "../../utils/API";

class Image extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchGoogleBooks();
  }

  searchGoogleBooks = query => {
    API.getGoogleBooks(query)
      .then(res => this.setState({ result: res.data.items[0].volumeInfo.imageLinks }))
      .catch(err => console.log(err));
      console.log(query)
      console.log(this.state.result)
  };

  render() {
    return (
        <img alt={this.state.result.title} className="img-fluid" src={this.state.result.thumbnail} style={{ margin: "0 auto" }} /> 
    );
  }
}

export default Image;