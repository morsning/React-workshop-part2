import React from 'react'
import { SomeComponent } from './SomeComponent'

class App extends React.Component {

    render() {
        return (
        <div>
            <p>some top</p>
            <SomeComponent />
            <p>some bottom</p>
        </div>
        )
    }

}

export default App