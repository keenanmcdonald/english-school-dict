import React from 'react';
import './App.css';
import JishoApi from 'unofficial-jisho-api';
import SearchBar from './components/SearchBar'
import Results from './components/Results'
const jisho = new JishoApi()

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      results: []
    }
  }
  
  search(searchTerm){
    
    jisho.searchForPhrase(searchTerm)
      .then(response => {
        console.log(response)
        this.setState({results: response.data})
      })
  
  }

  
  render(){
    return (
      <div className="App">
          <SearchBar search={(searchTerm) => this.search(searchTerm)}/>
          <Results results={this.state.results}/>
      </div>
    )
  }
}

export default App;
