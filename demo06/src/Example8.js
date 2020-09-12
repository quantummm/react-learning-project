import React, { useState, useRef, useEffect} from 'react';

function Example8(){
    const inputEl = useRef(null)
    const onButtonClick = ()=>{
        inputEl.current.value = "Hello user"
        console.log(inputEl)
    }
    
    const [text, setText] = useState('hello')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text
        console.log('textRef.current: ', textRef.current)
    })

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>show the input words</button>
            <br/>
            <br/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
    )
}

export default Example8