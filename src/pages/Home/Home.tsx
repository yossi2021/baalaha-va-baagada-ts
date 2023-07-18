import { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import './Home.css';
import { data } from "./data";
import { CardType, Categories } from "./types";
import ButtonsBar from "../../components/ButtonsBar";



function Home() {
    

    

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
        categoryChange(value);
    }

    function categoryChange(value: Categories){
        const filteredData =filterByCategory(value,[ ...data]);

        setSelectedCategory(value);
        setSearch('');
        setFiltered(filteredData);
      
    }

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
            <ButtonsBar
            updateDisplay={setDisplay}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            search={search}
            handleSearch={handleSearch}
            />
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
                        CategoryClick={categoryChange}
                        
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