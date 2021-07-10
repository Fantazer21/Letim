import React from "react";

import styles from './Header.module.css'
import {BrowserRouter} from "react-router-dom";
import {stateType} from "../state/state";
type typeHeader = {
    src: string,
}

const Header = (props: typeHeader) => {
    return (

        <header className={styles.header}>
            <img
                src={props.src}
                alt=""
                className={styles.photo}
            />
        </header>

    )
}
export default Header
