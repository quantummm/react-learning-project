const defaultState = {
    inputValue: 'add something',
    list: [
        'standup meeting',
        'review the project',
        'finish the project'
    ]
}



export default (state = defaultState, action) => {

    //console.log(state, action)
    //reducer only accept state, can't modify the state
    if (action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === 'deleteItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}