import React from "react";
import s from './nav.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile/profile" activeClassName={s.active}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Users" activeClassName={s.active}>
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.active}>
                    Music
                </NavLink>
            </div>

        </nav>
    )
}
export default Navbar
