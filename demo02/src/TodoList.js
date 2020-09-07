import React, { Component } from 'react';
//import store from './store'
import { connect } from 'react-redux'

const TodoList = (props) => {
    let { inputValue, inputChange, clickButton, list } = props
    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={inputChange}
                />
                <button
                    onClick={clickButton}
                >add</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }

            dispatch(action)
        },

        clickButton() {
            let action = {
                type: 'add_item'
            }

            dispatch(action)
        }
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);