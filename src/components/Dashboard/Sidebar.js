import {
    faPlus,
    faSatelliteDish,
    faShoppingBag,
    faSortAmountUp,
    faTasks,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <ul className="sidebar pt-9">
            {/* For customer service */}
            <li>
                <NavLink
                    className="nav-link"
                    to="/dashboard/bookinglist"
                    activeClassName="sidebar-selected"
                >
                    <FontAwesomeIcon icon={faShoppingBag} /> Booking List
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav-link"
                    to="/dashboard/review"
                    activeClassName="sidebar-selected"
                >
                    <FontAwesomeIcon icon={faSatelliteDish} /> Review
                </NavLink>
            </li>
            {/* For Admin */}
            <li>
                <NavLink
                    className="nav-link"
                    to="/dashboard/orderlist"
                    activeClassName="sidebar-selected"
                >
                    <FontAwesomeIcon icon={faSortAmountUp} /> Order List
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav-link"
                    to="/dashboard/addservices"
                    activeClassName="sidebar-selected"
                >
                    <FontAwesomeIcon icon={faPlus} /> Add Service
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav-link"
                    to="/dashboard/makeadmin"
                    activeClassName="sidebar-selected"
                >
                    <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav-link"
                    to="/dashboard/manageservice"
                    activeClassName="sidebar-selected"
                >
                    <FontAwesomeIcon icon={faTasks} /> Manage Service
                </NavLink>
            </li>
        </ul>
    );
};

export default Sidebar;
