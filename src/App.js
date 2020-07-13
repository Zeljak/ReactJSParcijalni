import React from 'react';
import './App.css';
import List from "./Components/List";
import Search from "./Components/Search";

export default class App extends React.Component  {
constructor(props){
  super(props);

  this.state = {
    results: {},
    repos: []
  }
}

handleResults = (data, repo)=> {
  this.setState({results: data, repos: repo, isLoading: false});
}

startSearch = ()=>{
  this.setState({isLoading: true});
}

render(){
  let showing = (<List data={this.state.results} repo={this.state.repos}/>);
  if (this.state.isLoading){
    showing = "Loading...";
  }




  return (
    <div className="App">
      <Search onSearchStart = {this.startSearch} onResult = {this.handleResults}/>
      {showing}
    
    
    </div>
  );
}

}
