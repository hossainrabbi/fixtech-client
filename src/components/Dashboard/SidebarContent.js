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
                <Route exact path="/dashboard/book">
                    <Book />
                </Route>
                <Route exact path="/dashboard/bookinglist">
                    <BookingList />
                </Route>
                <Route exact path="/dashboard/review">
                    <Review />
                </Route>
                <Route exact path="/dashboard/orderlist">
                    <OrderList />
                </Route>
                <Route exact path="/dashboard/addservices">
                    <AddServices />
                </Route>
                <Route exact path="/dashboard/makeadmin">
                    <MakeAdmin />
                </Route>
                <Route exact path="/dashboard/manageservice">
                    <ManageService />
                </Route>
            </Switch>
        </div>
    );
};

export default SidebarContent;
