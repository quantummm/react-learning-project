import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
import List from './pages/List'

function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/list/">List</Link></li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/" component={List} />
        </Router>
    )
}
 
export default AppRouter;