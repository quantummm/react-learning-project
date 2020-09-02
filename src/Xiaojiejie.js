import React, {Component, Fragment} from 'react'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue: 'new service',
            list:['junior','middle']
        }
    }

    render(){
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>add service</button>
                </div>
                    <ul>
                        {
                            this.state.list.map((item, index)=>{
                                return <li key={index+item} onClick={this.deleteItem.bind(this, index)}>{item}</li>
                            })
                        }
                    </ul>
               
            </Fragment>
        )
    }

    inputChange(e){
        // console.log(this)
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: e.target.value
        })
    }

    addList(){
        this.setState({
            list:[...this.state.list, this.state.inputValue]
        })
    }

    deleteItem(index){
        console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list:list
        })
    }
}
export default Xiaojiejie