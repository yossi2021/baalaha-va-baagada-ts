import { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import './Home.css';
import { data } from "./data";
import { CardType, Categories } from "./types";
import ButtonsBar from "../../components/ButtonsBar";
import Footer from "../../components/Footer";
import User from "../../components/User";
import BigPic from "../../components/BigPic";



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
        
        <BigPic/>
        <main className="text-end p-3">
        <Title content="פתח דבר לשאר ההלכה"/>
                <div className="bg-div p-1">
                    <p className="text-end">
                    סדרת הספרים שלפניכם מונגשת לכולם, 

                    לעיתים כשמגיעים ללמוד הלכות יש קושי מסויים מפאת קושי ההבנה של המושגים החדשים או מפאת קושי הלשון והסגנון.
                    </p>
                    <p>
                    ולכן כאן אנו מביאים בעיקר את ההלכות האקטואליות שנוגעות ממש ליום יום לכל רגע ורגע 
                    אם זה בשמירת השבת, החגים, טהרה, כשרות, ברכות, וכל מה שהיהודי היקר צריך לסדר יומו
                    </p>
                    <h4 className="text-center">חשוב להבין ולדעת </h4>
                    <p className="text-end"><b> לתועלת הלומדים: ההלכות שבחוברת הינם לבני ספרד ולבני אשכנז
                    ורק שיש חילוקי דינים בין מרן השולחן ערוך לרמ"א צויינו חילוקי דינים אלו.</b></p>
                    <p>סדרת החוברות "בהלכה ובאגדה" שופכת אור נפלא על מועדי ישראל השונים ונושאים נוספים.</p>
                    <p>חיונית מאוד לצועדים את צעדיהם הראשונים ביהדות, אך מעשירה ביותר אף ל"ותיקים".</p>
                    <p>בשער האגדה - יוכל הקורא לקרוא בשפה מרתקת וקולחת אודות החג ומהותו, טעמיו, אירועים שאירעו בו וכדומה.</p>
                    <p>בשער ההלכה - ימצא הקורא היקף של הלכות מעשיות ומצויות, בשפה קלה ונעימה, המתאימה אף למתחילים או למתעניינים בקיום המצוות.</p>
                </div>
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

                <div className="bg-div p-3 mb-5">
                        <h3 className="text-center">יום מוצלח</h3>
                                <p className="text-end">
                                    מסקנת חיים זו, מדד ישר ואמיתי זה - צריך האדם להשליך על כל יום ויום מחייו!
                                    מהו באמת יום מוצלח? יום מוצלח הוא יום שעשינו בו את רצון ה'!
                                    ואין זה משנה כלל כמה הספקנו או לא הספקנו, כמה נהנינו וכמה הצלחנו. היום הזה חי ונצחי. ולעומת זאת, יום שאדם חלילה לא עשה בו את רצון ה', הוא יום מת, יום שחלף ואיננו, עוד דף שנתלש מן היומן ונזרק לפח.
                                    טבעי הדבר שאדם רוקם לעצמו ציפיות ותוכניות לקראת היום הבא.
                                    ודאי שאדם צריך לכלכל את מעשיו בתבונה ולחשוב על צעדיו הבאים. אבל לפעמים התוכניות לא הולכות לו בדיוק כמו שהוא מצפה,
                                    ואז הוא מתחיל להיות במתח ואפילו לכעוס. ממה זה נובע? מהסתכלות מוטעית ולא נכונה, שהרי כאמור יום מוצלח איננו נמדד בהספקים ובהישגים. אם ידע האדם כי היום שלפניו יכול להיות יום מוצלח ביותר, יום חי וקיים ונצחי -
                                    גם כאשר כל התוכניות שלו משתבשות, שום דבר לא הולך, ורק הפסדים ונזקים מנת חלקו - או אז הוא יהיה רגוע ונינוח, יזרום עם מה שה' מזמן לו, מתוך השתדלות וכוונה כנה לכוון את מעשיו לפי רצון ה'.
                                </p>
                    </div>
            <Footer/>
            </main>
                </>
     );
}

export default Home;