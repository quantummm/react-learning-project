import React, { useState } from "react"

function styleJSX(){

    const [color, setColor] = useState('blue')

    const changeColor = ()=>{
        setColor(color=='blue'?"red":"blue")
    }

    return (
        <>
            <div>Welcome to style JSX </div>
            <button onClick={changeColor}>change color</button>

            <style jsx>
                {`
                    div{color: ${color};}
                `}
            </style>
        </>
    )
}

export default styleJSX