import React from 'react'
import '../Style/header.css'

const Content = (
            <header className="bg-dark text-white h1-text fs-2">
                <h1>
                    <img src="favicon-32x32.png" alt="" className="img-fluid ml-2 mr-2"/>
                    {' '}            
                    mark<span className="h1-span-text">V</span>iew
                </h1>
            </header>
        );

const Header = () => {
    return (
        <div id="header" className="mt-1 rounded shadow-color">
            {Content}
        </div>
    );
}

export default Header