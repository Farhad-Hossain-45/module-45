import { useLoaderData } from "react-router-dom";
import './UserDetails.css'


const UserDetails = () => {
    const user = useLoaderData()
    const {name,email,website} = user;
    return (
        <div>
            <h3>this is user details section</h3>
            <div className="container">
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{website}</p>
            </div>
        </div>
    );
};

export default UserDetails;