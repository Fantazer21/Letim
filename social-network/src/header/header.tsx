import React from "react";

import styles from './Header.module.css'
import {BrowserRouter} from "react-router-dom";

const Header = () => {
    return (

        <header className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png"
                alt=""
                className={styles.photo}
            />
        </header>

    )
}
export default Header
