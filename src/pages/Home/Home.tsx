import { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import './Home.css';
import { data } from "./data";
import { CardType, Categories } from "./types";



function Home() {
    

    const categories = Object.values(Categories);

    const [display, setDisplay]= useState('grid');
    const [selectedCategory ,setSelectedCategory] = useState(Categories.all);
    const [filtered , setFiltered]= useState([...data]);
    const [search ,setSearch] = useState('');

    function filterByCategory(category : Categories, cards: Array<CardType>):
    Array<CardType> {
        if( category === Categories.all){
            return cards;
        }
         return cards.filter(card=> card.category === category);
    }
    

    function handleCategoryChange(e : React.ChangeEvent<HTMLSelectElement>){
        const value = e.target.value as Categories;
        const filteredData =filterByCategory(value,[ ...data]);

        setSelectedCategory(value);
        setSearch('');
        setFiltered(filteredData);
    };

    function handleSearch (e : React.ChangeEvent<HTMLInputElement>){

        const value = e.target.value;
        let result = [...data];

        if (value.length > 0){
            const stripVal = value.trim().toLowerCase();
            result = [...data].filter(card =>
                card.name.toLowerCase().includes(stripVal)
                )
        }
            setSelectedCategory(Categories.all);
            setSearch(value);
            setFiltered(result);

    }

    if (data.length === 0) 
    return <p>ספר זה לא קיים במאגר</p>


    return ( 
        <>
        <Title content="אתר בהלכה ובאגדה"/>
            <div className="d-flex px-5 ">
                <div>
                <button className="btn btn-light mx-1"
                onClick={() => setDisplay('grid')}>
                    
                    <i className="bi-grid-3x3-gap-fill"></i>
                </button>
                <button className="btn btn-light"
                onClick={() => setDisplay('list')}>
                <i className="bi-list-ul"></i>
                </button>
                </div>

                <div className="d-flex alig-items-center">
                    <label >קטגוריות הספרים</label>
                    
                    <select 
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="form-select" 
                    >
                        {
                                categories.map(category =>
                                    <option
                                    key={category}
                                    value={category}
                                    >
                                        {category}
                                    </option>
                                    )
                        }
                    </select>

                            <input 
                            value={search} 
                            onChange={(e) => handleSearch(e)}
                                placeholder="חיפוש"
                                className="form-select ms-3"
                            />


                    </div>
            </div>
        { 
        filtered.length === 0?
        (<p className="text-center">ספר זה לא קיים במאגר</p>)
        : 
        (
        <div className={`${display} p-5`}>
            {

                filtered.map(card =>
                   
                    <Card
                        key={card.id}
                        {...card}
                    />

                    )
        
            }
        
                </div>
                )
            }
                </>
     );
}

export default Home;