
import Status from "./Status";
import { StatusEnum } from "../App";

export interface IUser{
    id: number;
    name: string;
    status: StatusEnum;
    email: string;

}
interface Props {
    users: Array<IUser>;
    deleteUser : Function;
}
function Table({users,deleteUser}: Props) {
    return ( 
        <table className=" table table-hover">
            <thead>
                <tr>
                    <th className="w-25">שם מלא </th>
                    <th className="w-25">סטאטוס</th>
                    <th className="w-50">כתובת מייל</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>
                        <tr key={user.id} className="bg-light">
                            <td>{user.name}</td>
                            <td>
                                <Status type={user.status}/>
                            </td>
                            <td>{user.email}</td>
                            <td>
                                <button 
                                onClick={()=> deleteUser(user)}
                                className="btn btn-light">
                                    <i className="bi-trash"></i>
                                </button>
                            </td>

                        </tr>
                        )
                }
            </tbody>
        </table>
     );
}

export default Table;