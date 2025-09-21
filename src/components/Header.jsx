import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/items-required">Items Required</Link> |{" "}
                <Link to="/how-to-reach">How To Reach</Link>
            </nav>
        </header>
    );
};

export default Header;
