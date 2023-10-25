import BigPic from "../../components/BigPic";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import OffersTable from "./OffersTable";


;

function Order() {
    return (  
        <>
        <BigPic/>
        <Title
        content=" הספרים והמבצעים שלנו"
        />
        <div className="text-center ">
            <p>
                עלות ספר היא 10 ש"ח, בערים מסויימות יש מבצעים והנחות
            </p>
            <p>
                מי שרוכש 100 ספרים מקבל הנחה של 100 ש"ח,   עלות סדרה ספרים עולה 230 ש"ח
            </p>
            <p>
                בתחתית העמוד ניתן לבדוק את תאריך המבצע ובאיזו עיר המבצע זמין
            </p>
        </div>

        {/* <OffersTable /> */}
        <div className="grid p-5">
        <div className="row  row-cols-1 row-cols-md-2  g-4 text-center rounded-2 ms-auto p-1 row-cols-sm-2 row-cols-lg-3  ">
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/sukotfront-copy.jpg" alt="סוכות" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/mitzvataaratzfront-copy.jpg" alt="מצוות הארץ" className="card1" />
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/rushhodeshfront-copy.jpg" alt="ראש חודש" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/mitbahback-copy.jpg" alt="כשרות המטבח" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/kibutfront-copy.jpg" alt="כיבוד אב ואם" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/nisuinfront-copy.jpg" alt="הנישואין" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/hanucafront-copy.jpg" alt="חנוכה" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/4taniyutfront-copy.jpg" alt="ארבע התעניות" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/britmukafront-copy.jpg" alt="ברית מילה" className="card1"/>
        
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/seoda-copy.jpg" alt="הסעודה" className="card1"/>
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/shabatfront-copy.jpg" alt="השבת" className="card1"/>
        
        
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/pesahfront-copy.jpg" alt="פסח" className="card1"/>
        </div>
        </div>
        <OffersTable />

        <Footer/>
        
            </>
    );
}

export default Order;