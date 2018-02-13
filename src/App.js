import React, { Component } from 'react';
import SearchBar from './Components/search_bar';
import { Container, Header } from 'semantic-ui-react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBlsDKSEnADH6MFN6rhFZQNfJuN-ceK99k';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    YTSearch({key: API_KEY, term: 'gift review'}, videos => {
      this.setState({ videos }) // when the key and value are the same name, we can use this shortcut 
      console.log(videos);
    })
  }
  render() {
    return (
      <div className="App">
        <Header>       
          <h1>Welcome to React</h1>
        </Header>
        <Container>
          <SearchBar />
        </Container>
        
      </div>
    );
  }
}

export default App;
