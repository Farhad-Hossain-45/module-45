
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav>
                <h1>this is navbar</h1>
                <Link to= "/">Home</Link>
                <Link to= "/about">about</Link>
                <Link to= "/contact">contact</Link>
                <Link to= "/users">users</Link>
                <Link to = "/posts">Post</Link>
                
                
            </nav>
        </div>
    );
};

export default Header;