import React from 'react'

function Result(props) {

    return (
        <div className='result'>
            <h2 className='word'>{props.item}</h2>
            <h3 className='description'>{props.description}</h3>
            <p>{props.example_sentences[0] ? props.example_sentences[0].text : ''}</p>
        </div>
    )    
    
}

export default Result