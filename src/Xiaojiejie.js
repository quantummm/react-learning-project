import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'new service',
            list: ['junior', 'middle']
        }
    }

    componentWillMount() {
        console.log('componentWillMount ------ start of lifecycle')
    }

    /**componentDidMount(){
        //console.log('componentDidMount ------ end of lifecycle')
        axios.get('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res)=>{
                console.log('axios success'+JSON.stringify(res))
                this.setState({
                    list:res.data.data
                })
            })
            .catch((error)=>{console.log('axios fail:'+error)})
    }*/

    shouldComponentUpdate() {
        //console.log('1-shouldComponentUpdate')
        return true
    }

    componentWillUpdate() {
        //console.log('2-componentWillUpdate')       
    }

    componentDidUpdate() {
        //console.log('4-componentDidUpdate')       
    }

    render() {
        //console.log('3-render------ middle of lifecycle')
        return (
            // flex
            <Fragment>
                {/* comment line */}
                {
                    // another comment line
                }
                <div>
                    <label htmlFor="formlabel">add servise:</label>
                    <input
                        id="formlabel"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.addList.bind(this)}>add service</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index + item}
                                        //key={item}
                                    >
                                        <XiaojiejieItem
                                            //key={index + item}
                                            content={item}
                                            index={index}
                                            deleteItem={this.deleteItem.bind(this)}
                                        //name="people"
                                        />
                                    </CSSTransition>
                                    /** 
                                        <li 
                                        key={index+item} 
                                        onClick={this.deleteItem.bind(this, index)}
                                        dangerouslySetInnerHTML={{__html:item}}
                                        >
                                        </li>
                                     */
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>

                <Boss />

            </Fragment>
        )
    }

    inputChange(e) {
        // console.log(this)
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: this.input.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        }, () => {
            console.log(this.ul.querySelectorAll('li').length)
        })

    }

    deleteItem(index) {
        console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie

