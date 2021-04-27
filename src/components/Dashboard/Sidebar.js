import {
    faPlus,
    faSatelliteDish,
    faShoppingBag,
    faSortAmountUp,
    faTasks,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggend, setLoggend] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        axios
            .get(
                `https://serene-fortress-07268.herokuapp.com/admin?email=${loggend.email}`
            )
            .then((res) => {
                setIsAdmin(res.data);
            })
            .catch((err) => console.log(err));
    }, [loggend.email]);

    return (
        <ul className="sidebar pt-9">
            {isAdmin ? (
                <>
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
                </>
            ) : (
                <>
                    <li>
                        <NavLink
                            className="nav-link"
                            to="/dashboard/bookinglist"
                            activeClassName="sidebar-selected"
                        >
                            <FontAwesomeIcon icon={faShoppingBag} /> Booking
                            List
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
                </>
            )}
        </ul>
    );
};

export default Sidebar;
