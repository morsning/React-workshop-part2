import React from 'react'

export const SomeList = (props) => {
    return (
        <React.Fragment>
            <p>The animals:</p>
            <ul>
                {props.animals.map(value => (<li key={value}>{value}</li>))}
            </ul>
        </React.Fragment>
    )
}