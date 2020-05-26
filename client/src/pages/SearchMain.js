import React, { Component } from "react";
import Image from "../components/Image/Image"
import Card from "./Card";
import Search from "./Search";
import BookDetail from "./BookDetail";
import API from "../utils/API";

class SearchMain extends Component {
  state = {
    result: {},
    result2:{},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchGoogleBooks();
  }

  searchGoogleBooks = query => {
    API.getGoogleBooks(query)
      .then(res => this.setState({ result: res.data.items[0].volumeInfo, 
                                   result2: res.data.items[0].volumeInfo.imageLinks}))
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
              
              <img alt={this.state.result.title} src={this.state.result2.thumbnail}/>  
              
              {this.state.result.title ? (
                <BookDetail
                  title={this.state.result.title}
                  author={this.state.result.authors[0]}
                  description={this.state.result.descrition}
                  link={this.state.result.link}
                ></BookDetail>
                
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