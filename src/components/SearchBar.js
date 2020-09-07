import React from 'react'
import config from '../config'


class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    updateSearchTerm(searchTerm){
        this.setState({searchTerm})
        this.search(searchTerm)
    }

    search(searchTerm){
        if (searchTerm) {
            fetch(config.API_ENDPOINT + 'dict/search/' + searchTerm)
                .then(response => {
                    return response.json()
                    //this.props.updateResults(response)
                })
                .then(parsedResponse => {
                    if (parsedResponse){
                        console.log(parsedResponse)
                        this.props.updateResults(parsedResponse)
                    }
                })
        }
        else {
            this.props.updateResults([])
        }
    }

    render(){
        return (
            <form className = 'search'>
                <input className = 'search-bar' onChange={e => this.updateSearchTerm(e.target.value)}></input>
            </form>
        )
    }
}

export default SearchBar