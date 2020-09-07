import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import Results from './components/Results'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      results: []
    }

    this.updateResults = this.updateResults.bind(this)
  }
  
  updateResults(results){
    this.setState({results})
  }
  
  render(){
    return (
      <div className="App">
          <SearchBar updateResults={this.updateResults}/>
          <Results results={this.state.results}/>
      </div>
    )
  }
}

export default App;
