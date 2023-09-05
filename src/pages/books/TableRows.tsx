import { Link } from "react-router-dom";
import { formatDate, formatPrice } from "../../utlis/utlis";
import { useContext } from "react";
import { BookContext } from "./Books";

function TableRows() {
    const context = useContext(BookContext);
    const books = context.books || [];
    const delBook = context.delBook || function () { };

    return ( 
        <>
        {
        books.map(books =>
              
            <tr key={books._id}>
                <td>{formatDate(books.date)}</td>
                <td>{books.location}</td>
                <td>{formatPrice (books.price)}</td>
                <td>
                    <div className="d-flex">
                        <Link 
                    to={`/edit/${books._id}`}
                    className="btn btn-default"
                            >
                    <i className="bi-pen"></i>
                        </Link>
                                            
                        <button 
                            onClick={() => delBook(books)}
                            className="btn btn-default"
                        >
                            <i className="bi-trash"></i>
                        </button>
                        </div>
                </td>
        </tr>
        )
        }
</>
     );
}

export default TableRows;