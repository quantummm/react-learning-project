import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import ReactPage from './video/ReactPage';
import Vue from './video/Vue';
import Flutter from './video/Flutter';

function Video(){
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/video/reactpage/'>React Tutorial</Link></li>
                    <li><Link to='/video/flutter/'>Flutter Tutorial</Link></li>
                    <li><Link to='/video/vue/'>Vue Tutorial</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>Video Tutorial</h3></div>
                <Route path="/video/reactpage/" component= {ReactPage}></Route>
                <Route path="/video/flutter/" component= {Flutter}></Route>
                <Route path="/video/vue/" component= {Vue}></Route>
            </div>
        </div>
    )
}

export default Video