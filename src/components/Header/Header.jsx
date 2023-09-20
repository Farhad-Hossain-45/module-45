
import './Header.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav>
                <h1>this is navbar</h1>
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/about">About</NavLink>
                <NavLink to = "/contact">Contact</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to = "/posts">Post</NavLink>
                
                
                
                
            </nav>
        </div>
    );
};

export default Header;