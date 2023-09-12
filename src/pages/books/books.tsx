import { createContext, useEffect, useState } from "react";
import AddForm from "./AddForm";
import { deleteRequest, getRequest } from "../../services/apiService";
import Panel from "../../components/Panel";
import TableRows from "./TableRows";
;

export interface IBooks {
    _id: number;
    date: string;
    location: string;
    price: number;
}

export interface Context {
    books: Array<IBooks>;
    delBook: Function;
}

export const BookContext = createContext<Context>({
    books: [],
    delBook: Function
});

function Books() {
    const [books ,setBooks] =useState<Array<IBooks>>([]);

        function getBooks(){
           const res = getRequest('books');
           if (!res) return;

            res.then(response => response.json())
                .then(json => {
                    setBooks(json);
                })  
        }

        useEffect(getBooks, []);

        function addBooks(newBook: IBooks){
            const updated = [...books];
            updated.push(newBook);
            setBooks(updated);
        }

        function delBook(book: IBooks){
            const res = deleteRequest(
                `books/${book._id}`
                );
                if (!res) return;

                res.then(response => response.json())
                .then(json => {
                    const updated = [...books].filter(
                        bookItem => bookItem._id !== book._id
                    );
                    setBooks(updated);
            })

            
        }


    return ( 
            <BookContext.Provider value={{books , delBook}}>
                <div className="text-center">
                    <h3 className="mt-5">
                     כאן תוכל להיות במעקב אחר הזמנות שבוצעו עד כה</h3>
                </div>

                {
                books.length === 0 &&
                <div className="alert alert-info m-5">עדיין לא בוצעו הזמנות</div>
                }

            <Panel>

                <AddForm  addBooks={addBooks}/>

                    <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th className="w-25">תאריך הזמנות קודמות</th>
                                        <th className="w-25">נרכש בעיר</th>
                                        <th className="w-50">המחיר ששולם</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    <TableRows  />
                                }
                
                                </tbody>
                            </table>
                            
                    </Panel>
                    <footer>
        <div >
          <p className="text-center text-white bg-secondary">
        כל הזכויות שמורות ליוסף בללי בניית אתרים בע"מ
          </p>
        </div>
    </footer>
                    
                </BookContext.Provider> 
                
                
        
     );
}

export default Books;