import React, { useState } from 'react';


function Example2(){
    const [ age , setAge ] = useState(18)
    const [ gender , setGender ] = useState('male')
    const [ work , setWork ] = useState('frontend developer')
    return (
        <div>
            <p>I'm {age} years old</p>
            <p>gender: {gender}</p>
            <p>job is: {work}</p>
        </div>
    )
}
export default Example2;

//useEffect()