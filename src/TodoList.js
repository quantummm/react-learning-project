import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getTodoList, getMyListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
//import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props);
        //console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)

    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }

    changeInputValue(e) {
        const action = //{
            //type: CHANGE_INPUT,
            //value: e.target.value
            changeInputAction(e.target.value)
        //}

        store.dispatch(action)
    }

    componentDidMount() {
        // const action = getTodoList()
        // store.dispatch(action)
        const action = getMyListAction()
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState)
    }

    clickBtn() {
        //console.log('clickbtn')
        //const action = {type: ADD_ITEM}
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        console.log(index)
        //const action = {
        //    type: DELETE_ITEM,
        //    index
        //}
        const action = deleteItemAction(index)

        store.dispatch(action)
    }
}

export default TodoList;