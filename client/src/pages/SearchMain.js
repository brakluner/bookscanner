import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";
import BookDetail from "./BookDetail";
import API from "../utils/API";

class SearchMain extends Component {
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
      .then(res => this.setState({ result: res.data.items[0].volumeInfo }))
      .catch(err => console.log(err));
      console.log(query)
      console.log(this.state.result)
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search google books`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogleBooks(this.state.search);
  };

  render() {
    return (
      <div>
            <Card
              heading={this.state.result.title || "Search for a Book to Begin"}
            >
              {this.state.result.title ? (
                <BookDetail
                  title={this.state.result.title}
                  author={this.state.result.author}
                  description={this.state.result.descrition}
                  image={this.state.result.image}
                  link={this.state.result.link}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
            <Card heading="Search">
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
      </div>
    );
  }
}

export default SearchMain;