import React, { useState, useMemo } from 'react';

function Example7() {
    const [xiaohong, setXiaohong] = useState('xiaohong')
    const [zhiling, setZhiling] = useState('zhiling')

    return (
        <div>
            <button onClick={() => { setXiaohong(new Date().getTime()) }}>xiaohong</button>
            <button onClick={() => { setZhiling(new Date().getTime()+'zhiling come to us') }}>zhiling</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </div>
    )

}

function ChildComponent({name, children}) {

    function changeXiaohong(){
        console.log('xiaohong come to us')
        return name+'xiaohong come to us'
    }

    const actionXiaohong = useMemo(()=>changeXiaohong(name),[name]) 

    return (
        <div>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </div>
    )

}

export default Example7