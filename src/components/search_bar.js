import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {

  constructor (props) {
    super(props);

    this.state = { term: 'Search' };
  }

  render() {
    return (
      <div>
        <input 
          value={ this.state.term }
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;

