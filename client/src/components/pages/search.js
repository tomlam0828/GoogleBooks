import React, {Component} from "react";
import Result from "../Result";
import axios from "axios";
import "./search.css";


class Search extends Component {
    state = {
        books: []
    }

    saveBooks = (id) => {
        console.log(id);
        const save = this.state.books.find(book => book.id === id )
        console.log(save);
    }

    getBooks = (event) => {
        event.preventDefault();
         const book = event.target.elements.bookInput.value;
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
        .then((res) => {
                console.log(res);
                    let arr = [];
                for (let i = 0; i < 10; i++) {
                    let data = {
                        id: res.data.items[i].id,
                        title: res.data.items[i].volumeInfo.title,
                        authors: res.data.items[i].volumeInfo.authors,
                        description: res.data.items[i].volumeInfo.description,
                        image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
                        link: res.data.items[i].volumeInfo.infoLink,
                    }
                    arr.push(data);
                    console.log(data);
                    // console.log(arr)
                    this.setState({
                        books: arr
                    })
                }
        })
    }
    render() {
        return (
            <div>
            <div className="searchInput">
            <form onSubmit={this.getBooks}>
            <label htmlFor="searchInput1">Book Search!</label>
                <input type="text" name="bookInput" className="form-control" />
                <button className="btn btn-primary">Search!</button>
            </form>
            </div>
            <Result 
                books={this.state.books}
                saveBooks={this.saveBooks}
            /> 

            </div>
        );
    }
}

export default Search;