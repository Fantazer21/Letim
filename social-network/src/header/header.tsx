import React from "react";
import { typeHeader } from "../types";

import styles from './Header.module.css'


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
