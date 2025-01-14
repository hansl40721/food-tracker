const React = require('react');
const { Link } = require('react-router-dom');
const Auth = require('../utils/auth');
require('../styles/Components.css');

const styles = {
    link: {
        textDecoration: 'inherit'
    }
}

const Nav = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div className='nav'>
            <Link to='/'>
                <div className='navTitle' style={styles.link}>MyPantry</div>
            </Link>
            <div className='navLogo'>{/* put logo here */}</div>
            <div>
                {Auth.loggedIn() ? (
                    <div className='navButtons'>
                        <Link className='pantry' to='/pantry'>
                           {Auth.getProfile().authenticatedUser.username}
                        </Link>
                        <button id='logout' className='logoutButton btn btn-lg btn-light m-2' onClick={logout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <Link className='navButtons logButton btn btn-lg btn-info m-2' to='/login'>Login</Link>
                    </>
                )}
            </div>
        </div>
    );
}

module.exports = Nav;