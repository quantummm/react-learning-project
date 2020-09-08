import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
         }

        this.toToggle = this.toToggle.bind(this)
    }
    
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                >
                    <div>Boss task</div>
                </CSSTransition>
                {/*<div className={this.state.isShow?'show':'hide'}>Boss task</div>*/}
                <div><button onClick={this.toToggle}>Generate task</button></div>
            </div>
         );
    }

    toToggle(){
        this.setState({
            isShow: this.state.isShow?false:true
        })
    }
}
 
export default Boss;