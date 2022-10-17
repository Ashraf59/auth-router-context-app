import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
    }
    return (
        <div>
            
            <div className="navbar bg-primary text-primary-content">
                 <Link className="btn btn-ghost normal-case text-xl" to='/'>Awesome Auth</Link>
                 <Link className="btn btn-ghost normal-case text-xl" to ='/'>Home</Link>
                 <Link className='btn btn-ghost normal-case text-xl' to = '/orders'>Orders</Link>
                 <Link className="btn btn-ghost normal-case text-xl" to ='/login'>Log in</Link>
                 <Link className="btn btn-ghost normal-case text-xl" to = '/register'>Register </Link> 
                 {user?.email && <span>Welcome, {user.email}</span>}

                 {
                    user?.email ?
                    <button onClick={handleSignOut} className="btn btn-sm ml-3">Sign Out</button>
                    : <Link to='/login'><button className='btn btn-sm'>Log in</button></Link>
                 }
                 
            </div>
        </div>
    );
};

export default Header;