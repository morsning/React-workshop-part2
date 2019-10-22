import React, { useState } from 'react'
import { DemoAppContext } from '../Contexts/DemoContext'
import { SomeList } from './SomeList'

export const SomeForm = (props) => {

    const [anAnimal, setAnimal] = useState('');

    return (
        <DemoAppContext.Consumer>
            {({ someGreeting, animals, addAnAnimal }) => (
            <React.Fragment>
                <p>{someGreeting}</p>
                <SomeList animals={animals} />
                <p>We can add a new animal and change the application state</p>
                <form onSubmit={e => {e.preventDefault(); addAnAnimal(anAnimal)}}>
                    <input 
                        type="text" 
                        value={anAnimal}
                        placeholder="animal name"
                        onChange={e => setAnimal(e.target.value)}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <p>value of some other prop: {props.someOtherValue}</p>
            </React.Fragment>
            )}
        </DemoAppContext.Consumer>
    )
}