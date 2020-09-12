import React, { useContext } from 'react';
import { ColorContext } from './color'

function ShowArea(){
    const {color} = useContext(ColorContext)
    return (<div style={{color: color}}>Color</div>)
}

export default ShowArea