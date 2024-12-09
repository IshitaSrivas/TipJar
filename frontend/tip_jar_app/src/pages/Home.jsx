import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>TipJar</h1>
            <nav>
                <ul>
                    <li><Link to="/mint">Mint Content</Link></li>
                    <li><Link to="/tip">Send Tip</Link></li>
                    <li><Link to="/view">View Content</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
