import React, { createContext, useState } from 'react';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:'numero 1',id:1},
        {title:'numero 2',id:2},
        {title:'numero 3',id:3},
        {title:'numero 4',id:4} 
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;