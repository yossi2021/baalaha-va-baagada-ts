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

    return ( 
        <>
            
            <div className="text-center">books</div>

            {
                books.length === 0 &&
                <div className="alert alert-info m-5">no orders yet</div>
            }

           <AddForm />

            <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="w-25">Date</th>
                                <th className="w-25">Location</th>
                                <th className="w-50">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                        
                            {
                            books.map(books=> 
                            <tr key={books._id}>
                                <td>{books.date}</td>
                                <td>{books.location}</td>
                                <td>{formatPrice (books.price)}</td>
                            </tr>
                            )
                            }
        
                        </tbody>
                    </table>
            
        </>
     );
}

export default Books;