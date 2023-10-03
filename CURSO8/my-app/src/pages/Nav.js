import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink className={
                ({ isActive }) => (isActive ? "activado" : null)
            } to="/">Pagina1 </NavLink>

            <NavLink className={
                ({ isActive }) => (isActive ? "activado" : null)
            } to="/pagina2">Pagina2 </NavLink>

            <NavLink className={
                ({ isActive }) => (isActive ? "activado" : null)
            } to="/pagina3">Pagina3 </NavLink>

            <NavLink className={
                ({ isActive }) => (isActive ? "activado" : null)
            } to="/pagina4/g">Pagina4 </NavLink>
        </nav>
    )
}


export default Nav
