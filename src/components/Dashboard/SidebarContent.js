import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Book from './Book';
import BookingList from './BookingList';
import Review from './Review';
import OrderList from './OrderList';
import AddServices from './AddServices';
import MakeAdmin from './MakeAdmin';
import ManageService from './ManageService';

const SidebarContent = () => {
    return (
        <div className="pt-9">
            <Switch>
                <Route path="/dashboard/book">
                    <Book />
                </Route>
                <Route path="/dashboard/bookinglist">
                    <BookingList />
                </Route>
                <Route path="/dashboard/review">
                    <Review />
                </Route>
                <Route path="/dashboard/orderlist">
                    <OrderList />
                </Route>
                <Route path="/dashboard/addservices">
                    <AddServices />
                </Route>
                <Route path="/dashboard/makeadmin">
                    <MakeAdmin />
                </Route>
                <Route path="/dashboard/manageservice">
                    <ManageService />
                </Route>
            </Switch>
        </div>
    );
};

export default SidebarContent;
