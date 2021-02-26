import React from 'react'
import '../Style/footer.css'

const Content = (
        <footer className="bg-dark text-white text-center p-1">
            <h2 className="mt-1">
                <a href="https://github.com/Himanshu16Singh/mark-view" target="_blank"
                    rel="noreferrer"
                >
                    <i className="text-white fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/himanshu16singh/" target="_blank"
                    rel="noreferrer"
                >
                    <i className="text-white ml-3 fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/himaNSHU_seeNGH" target="_blank"
                    rel="noreferrer"
                >
                    <i className="text-white ml-3 fab fa-twitter"></i>
                </a>
            </h2>
        </footer>
    );

const Footer = () => {
    return (
        <div id="footer" className="rounded shadow-color">
            {Content}
        </div>
    );
}

export default Footer