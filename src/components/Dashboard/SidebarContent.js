import React from 'react';
import { Switch } from 'react-router-dom';
import Book from './Book';
import BookingList from './BookingList';
import Review from './Review';
import OrderList from './OrderList';
import AddServices from './AddServices';
import MakeAdmin from './MakeAdmin';
import ManageService from './ManageService';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const SidebarContent = () => {
    return (
        <div className="pt-9">
            <Switch>
                <PrivateRoute exact path="/dashboard/book">
                    <Book />
                </PrivateRoute>
                <PrivateRoute exact path="/dashboard/bookinglist">
                    <BookingList />
                </PrivateRoute>
                <PrivateRoute exact path="/dashboard/review">
                    <Review />
                </PrivateRoute>
                <PrivateRoute exact path="/dashboard/orderlist">
                    <OrderList />
                </PrivateRoute>
                <PrivateRoute exact path="/dashboard/addservices">
                    <AddServices />
                </PrivateRoute>
                <PrivateRoute exact path="/dashboard/makeadmin">
                    <MakeAdmin />
                </PrivateRoute>
                <PrivateRoute exact path="/dashboard/manageservice">
                    <ManageService />
                </PrivateRoute>
            </Switch>
        </div>
    );
};

export default SidebarContent;
