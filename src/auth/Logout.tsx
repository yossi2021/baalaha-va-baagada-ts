interface Props {
    handler : Function;
}

function  Logout({ handler} : Props) {
        

    return ( 
           
            <button 
            onClick={(e) => handler()}
            className="btn btn-link nav-link"
            >
                 התנתק
            </button>
     );
}

export default  Logout;