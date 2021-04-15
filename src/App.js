import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Common/Footer';
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
            <Footer />
        </Router>
    );
}

export default App;
