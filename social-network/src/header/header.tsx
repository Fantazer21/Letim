import React from "react";

import styles from './Header.module.css'
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
