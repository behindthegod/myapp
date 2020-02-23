import React from "react";
import classes from './Header.module.css';


const Header = () => {
    return <header className={classes.header}>
        <img src='data:image/jpeg;base64,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'/>
    </header>
};

export default Header;