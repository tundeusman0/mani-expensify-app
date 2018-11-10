import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboad</NavLink>
        <NavLink to="/CreatePage" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/HelpPage" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;