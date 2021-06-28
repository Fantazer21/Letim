import React from "react";
import s from './nav.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/Profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/Messages" activeClassName={s.active}>
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/News" activeClassName={s.active}>
            News
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
