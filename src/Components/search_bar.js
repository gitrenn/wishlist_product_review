import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: ''}
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    render (){
        return (
            <div>
                <Input 
                onChange={this.onInputChange}
                value={this.state.term}
                icon='cart' 
                placeholder='Search...' />
                Value of the input: { this.state.term }
            </div>
        )

    }
}

export default SearchBar;