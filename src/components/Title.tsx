interface Props{
    content : string;
    
    
    
}

function Title({content} :Props)  { 
    return (
        <>
        <div className="bg-secondary mb-5 p-2 text-white ">
            <h1 className="display-3 text-center p-2 ">{content}</h1>
            </div>
        
        </>
    );
}

export default Title;