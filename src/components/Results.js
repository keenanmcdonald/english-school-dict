import React from 'react'
import Result from './Result'

function Results(props){

    const results = []

    for (let i = 0; i < props.results.length && i < 5; i++){
        results.push(<Result key={i} {...props.results[i]}/>)
    }

    return (
        <div className='results'>
            {results}
        </div>
    )
}

export default Results