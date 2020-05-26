import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <h3>Author(s): {props.author}</h3>
      <h3>Title: {props.title}</h3>
      <h3>Description: {props.textSnippet}</h3>
      <h3>Link: <a href={props.webReaderLink}>{props.title} - Google Play</a></h3>
    </div>
  );
}

export default BookDetail;