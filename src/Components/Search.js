import React from 'react';
import {apiURL} from "../Common";

export default class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            query: ""
        }
    }
    handleSearch = (e) => {
        e.preventDefault();

        if(!this.state.query || this.state.query.length === 0){
            return;
        }

        this.props.onSearchStart();
    
        Promise.all([
            fetch(apiURL + this.state.query)
            .then((response) => response.json()),
            fetch(apiURL + this.state.query + "/repos")
            .then((response) =>
              response.json()
            ),
          ]).then(([data, repo]) => {
            this.props.onResult(data, repo);
            this.setState({ query: "" });
          });
   
}
 handleQueryChange = (e) => {
     this.setState({ query: e.target.value})
 }
    render(){
        return(
            <form onSubmit={this.handleSearch}>
            <input required placeholder="Start your GitHub search..." 
            type="text"
            value={this.state.query}
            onChange = {this.handleQueryChange}></input>
            <input type="submit" value="GO!"></input>


            </form>


        )
    }

}