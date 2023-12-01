interface Props{
    content : string;
    
    
    
}

function Title({content} :Props)  { 
    return (
        <>
        <div className="bg-secondary mb-5 p-2 text-white ">
            <h2 className="text-center p-2 ">{content}</h2>
            </div>
        
        </>
    );
}

export default Title;