import { StatusEnum } from "../App";

interface Props{
    type: StatusEnum;
}

function Status({type}: Props) {
    function getBadgeCss(){
        switch (type) {
            case 'active':
                return 'bg-success';
                case 'expired':
                return 'bg-warning';
                case 'banned':
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