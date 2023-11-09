import { NavLink } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
interface Props {
    name: string;
    // price: number;
   // description: string;
    image : string;
    category: string;
    CategoryClick: Function;
}


function Card({
    name,
    // price,
     //description ,
     image ,
      category,
      CategoryClick
    }
     :Props) {

      function handleClick(name: string){
        console.log(`this ${name}`);
      }
      
    
    return ( 
      
      <div className="">
        <div className="card1 m-4 card align-items-center" >
        <img src={image} className="card-img-top img-fluid" alt={name}/>
        <div 
          onClick={() => CategoryClick(category)}>
          {category}
          </div>
        <div className="card-body ">
          {/* <h5 className="card-title text-center">{name}</h5> */}
          {/* <p className="card-text ">{description}</p> */}
          {/* <p className="card-text">{price}</p> */}
          <button type="button" className="btn bg-primary">
          {/* <a 
          onClick={(e) => handleClick(name)}
          href='/offers' 
          className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex "
        >
          עבור לעמוד ספרים ומבצעים
          </a> */}
          <NavLink 
                        onClick={(e) => handleClick(name)}
                        className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover d-flex"
                        aria-current="page"
                        to="/offers" 
                        >
          עבור לעמוד ספרים ומבצעים
                    </NavLink>
          </button>
        </div>
      </div>
      </div>
      
     );
}

export default Card;