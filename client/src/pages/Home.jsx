const { Link } = require('react-router-dom');
const Auth = require('../utils/auth');
require('../styles/Pages.css');

const Home = () => {
    return (
        <div className='homeContainer'> 
            <div className='splashContainer'>
                <div className='splashText'>
                    <h1>Welcome to MyPantry!</h1>
                    <h2>Keep track of your groceries, reduce food waste, and save money all in one place!</h2>
                    { !Auth.loggedIn() ? (
                        <div className='loginLink'>
                            <Link to='/login'>Login</Link>
                        </div>
                    ) : (
                        <div className='loginLink'>
                            <Link to='/pantry'>Go to Pantry</Link>
                        </div>
                    )
                    }
                </div>
                    
                <div className='splashImage'>
                    {/* put images here */}
                </div>
            </div>
            <div className='footer'>
                    <p>Made by Lucas Hansen</p>
            </div>
        </div>
    );
}

module.exports = Home;