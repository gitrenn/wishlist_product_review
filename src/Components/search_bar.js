import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'semantic-ui-react';


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
            <div>
                <Form>
                    <Input 
                        onChange={this.onInputChange}
                        value={this.state.term}
                        icon='search' 
                        placeholder='Search...' />                     
                    <Button.Group floated='right'>
                        <Button
                            onClick={this.handleSubmit} 
                            type='submit' 
                            animated>
                            <Button.Content visible>Search</Button.Content>
                            <Button.Content hidden>
                                <Icon name='youtube' /> YouTube
                            </Button.Content>
                        </Button>
                    </Button.Group>
                </Form>
            </div>
        )

    }
}

export default SearchBar;