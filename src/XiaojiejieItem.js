import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    }

    //if this component exists in DOM for first time, the function will not be executed
    //if this component exists in the DOM, the function will be executed
    componentWillReceiveProps(){
        //console.log("child-componentWillReceiveProps")
    }

    componentWillUnmount(){
        //console.log('child-componnentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render() { 
        console.log("child-render")
        return ( 
            <li onClick={this.handleClick}>
                {this.props.name}-support-{this.props.content}
            </li>
         );
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
 
XiaojiejieItem.propTypes={
    name: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

XiaojiejieItem.defaultProps={
    name:'Tony'
}
export default XiaojiejieItem;