import React from 'react';
import { Link, Route} from 'react-router-dom'
import Money from './workplace/Money'
import Getup from './workplace/Getup'

function Workplace(){
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/workplace/money/'>Money Tutorial</Link></li>
                    <li><Link to='/workplace/getup/'>Getup Tutorial</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>WorkPlace Tutorial</h3></div>
                <Route path="/workplace/money/" component= {Money}></Route>
                <Route path="/workplace/getup/" component= {Getup}></Route>
            </div>
        </div>
    )
}

export default Workplace