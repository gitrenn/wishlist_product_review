import React, { Component } from 'react';
import SearchBar from './Components/search_bar';
import { Container, Header } from 'semantic-ui-react';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';
import { Grid, Segment } from 'semantic-ui-react';

const API_KEY = 'AIzaSyBlsDKSEnADH6MFN6rhFZQNfJuN-ceK99k';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('DJI');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }) // when the key and value are the same name, we can use this shortcut 
      console.log(videos);
    })
  }

  render() {
    return (
      <div className="App">
        <Header textAlign='center'>       
          <h1>Gift Review Demo</h1>
        </Header>
        <Container>
         <Grid stackable columns={2}>
          <Grid.Column width={10}>
            <Segment>
              <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            </Segment>
            <Segment>
              <VideoDetail video={this.state.selectedVideo} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </Segment>
          </Grid.Column>
         </Grid>
        </Container>
        
      </div>
    );
  }
}

export default App;
