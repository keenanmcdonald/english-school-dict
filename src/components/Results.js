import React from 'react'

function Results(props){

    const results = []

    for (let i = 0; i<props.results.length; i++){
        results.push(
        <li key={i}>{props.results[i].slug}</li>
        )
    }

    console.log('called results')
    console.log(props)


    return (
        <div className='results'>
            <ul>
                {results}
            </ul>
        </div>
    )
}

export default Results