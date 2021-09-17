
import React from 'react';
import { AffairType } from './HW2';

import classes from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const { name, priority, _id: id } = props.affair;

    const deleteCallback = () => {
        props.deleteAffairCallback(id);
    };

    return (
        <div className={classes.affairWrapper}>
            <div className={classes.name}>{name}</div>
            <div className={classes.priority}>
                <span className={`${classes[priority]}`}>{priority}</span>
            </div>
            <button className={classes.deleteBtn} onClick={deleteCallback}>X</button>
        </div>

    );
}

export default Affair;