import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
import List from './pages/List'
import Home from './pages/Home'


function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/list/123">List</Link></li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </Router>
    )
}
 
export default AppRouter;