import BigPic from "../../components/BigPic";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import OffersTable from "./OffersTable";


;

function Order() {
    return (  
        <>
        <BigPic/>
        <main className="text-end p-3">
        <Title content="הספרים והמבצעים שלנו"/>
        
        
        <div className="text-end fw-bold">
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
        
        <div className="grid ">
        {/* <div className="row  row-cols-1 row-cols-md-2  g-4 text-center rounded-2 ms-auto p-1 row-cols-sm-2 row-cols-lg-3  "> */}
            
        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/sukotfront-copy.jpg" className="card-img-top" alt="חג סוכות"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/sukot1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/mitzvataaratzfront-copy.jpg" alt="מצוות הארץ" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/mitzvot-haaretz1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/rushhodeshfront-copy.jpg" className="card-img-top" alt="ראש חודש"/> 
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/rosh-hodesh1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/kibutfront-copy.jpg" alt="כיבוד אב ואם" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/kibud-av1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/nisuinfront-copy.jpg" alt="הנישואין" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/nisuin1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/hanucafront-copy.jpg" alt="חנוכה" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/hanuka1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/4taniyutfront-copy.jpg" alt="ארבע התעניות" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/taaniot1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/britmukafront-copy.jpg" alt="ברית מילה" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/brit-mila1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/seoda-copy.jpg" alt="הסעודה" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/seuda1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/shabatfront-copy.jpg" alt="השבת" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary m-1">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/shabat1.png" 
              target="_blank" aria-current="true" rel="noreferrer">חלק 1</a></button>
            <button type="button" className="btn bg-primary m-1">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/shabat2.png" 
              target="_blank" aria-current="true" rel="noreferrer">חלק 2</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/pesahfront-copy.jpg" alt=" חג פסח" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/pesah1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/rushashanafront-copy.jpg" className="card-img-top" alt=" ראש השנה ויום כיפור"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/rosh-hashana1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/sederyomfront-copy.jpg" className="card-img-top" alt=" סדר היום"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/seder-yom1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/liyotatkatan-copy.jpg" className="card-img-top" alt=" להיות את"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/lihiot-at1-e1699997076318.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/pirkeavotfront-copy.jpg" className="card-img-top" alt="  פרקי אבות"/>
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/pirke-avot1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>

        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/barmitzvafront-copy.jpg" alt="בר מצווה" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/bar-mitzva1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>
        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/purimfront-copy.jpg" alt="פורים" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/purim1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>
        <div className="card1 m-4 card align-items-center" >
          <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/mitbahback-copy-e1699998245120.jpg" alt="כשרות המטבח" className="card-img-top" />
          <div className="btn-group m-2" role="group" aria-label="Basic example">
            <button type="button" className="btn bg-primary">
              <a className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover " 
              href="https://r-rdesign.co.il/wp-content/uploads/2023/11/kashrut-mitbah1.png" 
              target="_blank" aria-current="true" rel="noreferrer">לחץ לתוכן הספר</a></button>
          </div>
        </div>
        
            
            {/* <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/sukotfront-copy.jpg" alt="סוכות" className="card1"/>
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
        
        
            <img src="https://r-rdesign.co.il/wp-content/uploads/2023/09/pesahfront-copy.jpg" alt="פסח" className="card1"/> */}
        </div>
        {/* </div> */}
        <OffersTable />
        </main>
        <Footer/>
        
            </>
    );
}

export default Order;