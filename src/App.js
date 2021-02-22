import React from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';

const App = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App