import React from 'react'

import styles from './Content.module.css'
import {BrowserRouter, Route} from "react-router-dom";

const Content = () => {
    const User1 = [
        {name: 'Ilya'},
        {age: 30}
    ]
    const User2 = [
        {name: 'Miki'},
        {age: 40}
    ]
    return (
        <div className={styles.content}>
            {/*<Route path='/messages' component={Messages}/>*/}
            {/*<Route path='/News' component={News}/>*/}
            {/*<Route path='/Music' component={Music}/>*/}
        </div>

    )
}
export default Content
