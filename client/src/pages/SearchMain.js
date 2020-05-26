import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";
import BookDetail from "./BookDetail";
import API from "../utils/API";

class SearchMain extends Component {
  state = {
    result: {},
    result2:{},
    result3:{},
    result4:{},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchGoogleBooks("1984");
  }

  searchGoogleBooks = query => {
    API.getGoogleBooks(query)
      .then(res => this.setState({ result: res.data.items[0].volumeInfo, 
                                   result2: res.data.items[0].volumeInfo.imageLinks,
                                   result3: res.data.items[0].searchInfo,
                                   result4: res.data.items[0].accessInfo }))
      .catch(err => console.log(err));
      console.log(query)
      console.log(this.state.result4)
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
                  textSnippet={this.state.result3.textSnippet}
                  webReaderLink={this.state.result4.webReaderLink}
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