import { useEffect, useState } from "react";
import { formatPrice } from "../../utlis/utlis";
import AddForm from "./AddForm";


export interface IBooks {
    _id: number;
    date: string;
    location: string;
    price: number;
}

function Books() {
    
    const [books ,setBooks] =useState<Array<IBooks>>([]);

        function getBooks(){
            fetch('http://localhost:3000/books/')
            .then(response => response.json())
            .then(json => {
                setBooks(json)
            })
            
        }

        useEffect(getBooks, []);

        function addBooks(newBook: IBooks){
            const updated = [...books];
            updated.push(newBook);
            setBooks(updated);
        }

        function delBook(book: IBooks){
            fetch(`http://localhost:3000/books/${book._id}` , {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(json => {
                    const updated = [...books].filter(
                        bookItem => bookItem._id !== book._id
                    );
                    setBooks(updated);
            })

            
        }

    return ( 
        <>
            
            <div className="text-center">books</div>

            {
                books.length === 0 &&
                <div className="alert alert-info m-5">no orders yet</div>
            }

           <AddForm  addBooks={addBooks}/>

            <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="w-25">Date</th>
                                <th className="w-25">Location</th>
                                <th className="w-35">Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                    
                        
                            {
                            books.map(books=> 
                            <tr key={books._id}>
                                <td>{books.date}</td>
                                <td>{books.location}</td>
                                <td>{formatPrice (books.price)}</td>
                                <td>
                                    <button 
                                    onClick={() => delBook(books)}
                                    className="btn btn-default"
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                            )
                            }
        
                        </tbody>
                    </table>
            
        </>
     );
}

export default Books;