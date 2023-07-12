interface Props {
    name: string;
    price: number;
    description: string;
    image : string;
    category: string;
}


function Card({
    name,
    price,
     description ,
     image ,
      category
    }
     :Props) {
    
    return ( 
        <div className="card" >
  <img src={image} className="card-img-top" alt={name}/>
  <div>{category}</div>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">{price}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     );
}

export default Card;