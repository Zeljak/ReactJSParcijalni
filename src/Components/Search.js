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

    render(){
        return(
            <form>

            </form>


        )
    }

}