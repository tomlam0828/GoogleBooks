import React from "react";
// import Search from "../pages/search";
// import API from "../../utils/API"
// import Search from "../pages/search"
import "./style.css";

function Result (props) {
    return (
        <div className="result">
            <h2>Result</h2>
        <div>
            {props.books.map(book => (
                <li
                    className="result1"
                    key={book.id}
                    id={book.id}
                >
                    <p>Title: {book.title}</p>
                    <p>Authors: {book.authors}</p>
                    <img src={book.image} />
                    <p>Link: {book.link}</p>
                    <p>Description: {book.description}</p>
                    <a className="btn btn-primary" href={book.link} target="_blank"role="button">view</a>
                    <button className="btn btn-primary" onClick={() => props.saveBooks(book.id)}>save</button>
                </li>
            ))}
        </div>
        </div>
    )
 }

export default Result;