import React from 'react'

function Result(props){
    /*
    const senses = []
    for (let i = 0; i < props.senses.length; i++){
        const definitions = []
        for (let j = 0; j < props.senses[i].english_definitions.length; j++){
            definitions.push(<span key={j} className='en-definition'>{props.senses[i].english_definitions[j]}; </span>)
        }
        senses.push(
            <div className='sense' key={i}>
                <p><span>{i+1}. </span> {definitions}</p>
            </div>
        )
    }*/
    
    return (
        <div className='result'>
            <h2 className='word'>{props.item}</h2>
            <h3 className='description'>{props.description}</h3>
        </div>
    )
}

export default Result