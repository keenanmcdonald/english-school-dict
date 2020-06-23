import React from 'react'

class SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    updateSearchTerm(searchTerm){
        this.setState({searchTerm})
        this.props.search(searchTerm)
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