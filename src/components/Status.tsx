import { StatusEnum } from "../App";

interface Props{
    type: StatusEnum;
}

function Status({type}: Props) {
    function getBadgeCss(){
        switch (type) {
            case 'פעיל':
                return 'bg-success';
                case 'לא בתוקף':
                return 'bg-warning';
                case 'לא במערכת':
                    return 'bg-secodary';
                
            default:
                break;
        }
    }

    function handleClicks(type: StatusEnum){
        console.log(`you clicked ststus : ${type}`)
    }
    return ( 
        <span
        onClick={()=> handleClicks(type)}
        className={`bage ${getBadgeCss()} text-capitalize`}
        >
            {type}

        </span>
     );
}

export default Status;