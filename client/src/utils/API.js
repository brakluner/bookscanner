import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIkey = '&key=AIzaSyBe26Em_nteYXsmCcxVF2TwX1GREU4Oeu4';




export default {
  //googlebooks
  getGoogleBooks: (query) => {
    console.log(BASEURL + query + APIkey)
    return axios.get(BASEURL + query + APIkey);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};