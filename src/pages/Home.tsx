
import Card from "../components/Card";
import Title from "../components/Title";
function Home() {
    return ( 
        <>
        <Title content="אתר בהלכה ובאגדה"/>
        
        <Card 
        name="הלכות שבת" 
        price={10} 
        image=  "baalaha-va-baagada-ts/img/kidush1.jpg"
        description="יהודי יקר כל שתרצה על מנת לשמור שבת" 
        category="הלכות שבת"
        />

        <Card 
        name="חגים ומועדים" 
        price={10} 
        image="	https://cdn.pixabay.com/photo/2023/06/20/20/31/flower-8077948_1280.jpg" 
        description="" 
        category=""
        />

        <Card 
        name="סדר יום" 
        price={10} 
        image="	https://cdn.pixabay.com/photo/2023/06/20/20/31/flower-8077948_1280.jpg" 
        description="" 
        category=""
        />
        
        </>
     );
}

export default Home;