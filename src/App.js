import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavManu from './components/Common/NavManu';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
    return (
        <Router>
            <NavManu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
