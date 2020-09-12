import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <p>You click {this.state.count} times.</p>
//                 <button onClick={this.addCount.bind(this)}>click me</button>
//             </div>
//          );
//     }

//     addCount(){
//         this.setState({count: this.state.count+1})
//     }
// }

function Index(){
    useEffect(()=>{
        console.log(`useEffect=>Welcome to Index page`)
        return ()=>{
            console.log(`useEffect=>Good bye Index page`)
        }
    },[])
    return <h2>Homepage</h2>
}


function List(){
    useEffect(()=>{
        console.log(`useEffect=>Welcome to List page`)
        return ()=>{
            console.log(`useEffect=>Good bye List page`)
        }
    })
    return <h2>List Page</h2>
}

function Example() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log(`========================`)
        }
    },[count])

    return (
        <div>
            <p>You click {count} times.</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>

            <Router>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/list/">List Page</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/"  component={List}></Route>
            </Router>
        </div>
    )
}

export default Example;