import { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import './Home.css';

interface CardType {
    id: number;
    name: string;
    price: number;
    description: string;
    image : string;
    category: string;
}

enum Categories {
   all = 'לכל הקטגוריות',
   shabat = 'שבת',
   hagim = 'הלכות חגי ישראל',
   sederYom = 'הלכות סדר יום'
}

function Home() {
    const data = [
        {
            id:1,
        name:"הלכות שבת" ,
        price:10 ,
        image:"	https://cdn.pixabay.com/photo/2023/06/20/20/31/flower-8077948_1280.jpg" ,
        description:"יהודי יקר כל שתרצה על מנת לשמור שבת" ,
        category:"שבת"  
        },
        {
            id:2,
        name:"חגים ומועדים" ,
        price:10 ,
        image:"	https://cdn.pixabay.com/photo/2023/06/15/12/26/lotus-8065281_1280.jpg" ,
        description:"יהודי יקר כל שתרצה על מנת לשמור חגים" ,
        category:"הלכות חגי ישראל"
        } ,
        {
            id:3,
        name:"סדר יום" ,
        price:10 ,
        image:"	https://cdn.pixabay.com/photo/2023/06/12/16/41/wild-bee-8058943_1280.jpg" ,
        description:"יהודי יקר כל שתרצה על מנת להתחיל את יומך" ,
        category:"הלכות סדר יום"
        } 
    ];

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
            result = [...data].filter(card =>
                card.name.toLowerCase().includes(value.toLowerCase())
                )
        }
            setSelectedCategory(Categories.all);
            setSearch(value);
            setFiltered(result);

    }

    

    // function handleDisplayClic(displayType : string) {
    //     setDisplay(displayType);
    // }

    return ( 
        <>
        <Title content="אתר בהלכה ובאגדה"/>
            <div className="d-flex px-5">
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
        </>
     );
}

export default Home;