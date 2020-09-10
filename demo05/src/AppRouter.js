import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Index from './Pages/Index'
import './index.css'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'

function AppRouter() {
    let routeConfig = [
        { path: '/', title: 'Blog Homepage', exact: true, component: Index },
        { path: '/video/', title: 'Video', exact: false, component: Video },
        { path: '/workplace/', title: 'Workplace', false: true, component: Workplace }
    ]

    return (
        <div>
            <Router>
                <div className="mainDiv">
                    <div className="leftNav">
                        <h3>First navigation</h3>
                        <ul>
                            {
                                routeConfig.map((item, index) => {
                                    return (<li key={index}><Link to={item.path}>{item.title}</Link></li>)
                                })
                            }
                            {/* <li><Link to="/">Homepage</Link></li>
                            <li><Link to="/video/">Video</Link></li>
                            <li><Link to="/workplace/">Workplace</Link></li> */}
                        </ul>
                    </div>
                    <div className="rightMain">
                        {
                            routeConfig.map((item, index) => {
                                return (<Route key={index} path={item.path} exact={item.exact} component={item.component} />)
                            })
                        }
                        {/* <Route path="/" exact component={Index} />
                        <Route path="/video/" component={Video} />
                        <Route path="/workplace/" component={Workplace} /> */}
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter