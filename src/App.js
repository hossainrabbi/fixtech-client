import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavManu from './components/Common/NavManu';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
    const [loggend, setLoggend] = useState({});

    return (
        <UserContext.Provider value={[loggend, setLoggend]}>
            <Router>
                <NavManu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
