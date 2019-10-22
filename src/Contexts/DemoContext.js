import React from 'react'

export const DemoAppContext = React.createContext();

export class DemoProvider extends React.Component {
    
    state = {
        someGreeting: 'hello and welcome',
        animals: ['dog']
    }

    addAnAnimal = (name) => {
        let animals = this.state.animals
        animals.push(name)
        this.setState({animals: animals})
    }

    render() {
        return (
            <DemoAppContext.Provider value={{...this.state, addAnAnimal: this.addAnAnimal}}>
                {this.props.children}
            </DemoAppContext.Provider>
        )
    }
}