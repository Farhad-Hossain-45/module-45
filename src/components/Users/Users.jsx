import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <p>users : {users.length}</p>
            <p>awesome user</p>
            <div className="user-container">
                {
                    users.map(user => <User key={user.id} user = {user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;