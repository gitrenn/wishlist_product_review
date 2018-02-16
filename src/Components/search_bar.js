import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: ''}
    }

    onInputChange = (event) => {
        let input = event.target.value;
        this.setState({
            term: input
        });
        this.props.onSearchTermChange(input);
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