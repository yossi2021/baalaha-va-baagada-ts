/* eslint-disable jsx-a11y/anchor-is-valid */
interface Props {
    name: string;
    price: number;
    description: string;
    image : string;
    category: string;
    CategoryClick: Function;
}


function Card({
    name,
    price,
     description ,
     image ,
      category,
      CategoryClick
    }
     :Props) {

      function handleClick(name: string){
        console.log(`this ${name}`);
      }
      
    
    return ( 
        <div className="card m-4 " >
        <img src={image} className="card-img-top" alt={name}/>
        <div 
          onClick={() => CategoryClick(category)}>
          {category}
          </div>
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
          <a 
          onClick={(e) => handleClick(name)}
          href="#" 
          className="btn btn-primary"
        >
          לצפייה בספרים
          </a>
        </div>
      </div>
     );
}

export default Card;