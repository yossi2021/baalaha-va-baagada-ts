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
        category:"הלכות יום יום"
        } 
    ];

    const categories = ['לכל הקטגוריות','שבת', 'הלכות חגי ישראל','הלכות יום יום'];

    const [display, setDisplay]= useState('grid');
    const [selectedCategory ,setSelectedCategory] = useState('לכל הקטגוריות');
    const [filtered , setFiltered]= useState([...data]);

    function filterByCategory(category : string, cards: Array<CardType>):
    Array<CardType> {
        if( category === 'לכל הקטגוריות'){
            return cards;
        }
         return cards.filter(card=> card.category === category);
    }
    

    function handleCategoryChange(e : React.ChangeEvent<HTMLSelectElement>){
        const value = e.target.value;
        const filteredData =filterByCategory(value,[ ...data]);

        setSelectedCategory(value);
        setFiltered(filteredData);
    };

    // function handleDisplayClic(displayType : string) {
    //     setDisplay(displayType);
    // }

    return ( 
        <>
        <Title content="אתר בהלכה ובאגדה"/>
            <div className="">
                <button className="btn btn-light mx-1"
                onClick={() => setDisplay('grid')}>
                    
                    <i className="bi-grid-3x3-gap-fill"></i>
                </button>
                <button className="btn btn-light"
                onClick={() => setDisplay('list')}>
                <i className="bi-list-ul"></i>
                </button>
                <div>
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