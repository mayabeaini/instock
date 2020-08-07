import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logo from "../../assets/Logo/Logo-instock.svg";
import './Nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__logo">
                    <Link to="/"><img src={Logo} alt="Instock Logo"/></Link>
                </div>

                <div className="nav__list">
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/warehouses">Locations</Link>
                </div>
            </div>
        )
    }
}
