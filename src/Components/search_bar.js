import React, { Component } from 'react';
import { Input, Icon, Button } from 'semantic-ui-react';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputChange = (event) => {
        let input = event.target.value;
        this.setState({
            term: input
        });
        //this.props.onSearchTermChange(input);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchTermChange(this.state.term);
        this.setState({ term: ''});
    }

    render (){
        return (
            <Input 
                onChange={this.onInputChange}
                value={this.state.term}
                icon='search' 
                placeholder='Search...'
                action >                     
                <input />
                <Button
                    onClick={this.handleSubmit} 
                    type='submit' 
                    animated>
                    <Button.Content visible>Search</Button.Content>
                    <Button.Content hidden>
                        <Icon name='youtube' /> YouTube
                    </Button.Content>
                </Button>
            </Input>
        )

    }
}

export default SearchBar;