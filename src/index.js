import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import BrowserInfo from './components/BrowserInfo';
import Footer from './components/Footer';
import browsersData from './data/browsers.json';

function App() {
    const navList = ['Home', 'About', 'Contact'];

    return (
        <div>
            <NavBar title="Navigation bar" items={navItems} />
            <h1>Popular web browsers</h1>
            {browsersData.map((browser, index) => (
                <BrowserInfo key={index} browser={browser} />
            ))}
            <Footer />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));