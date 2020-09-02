import React, {Component} from 'react'

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{true?'DEMO.com':'test.com'}</li>
                <li>I love React</li>
            </ul>
        )
    }
}

export default App