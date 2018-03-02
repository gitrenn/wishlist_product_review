import React from 'react';
import { Segment, Embed, Header } from 'semantic-ui-react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;

    return (
        <div>
            <Segment attached>
                <Header>{video.snippet.title}</Header>
            </Segment>
            <Embed 
                id={videoId}
                placeholder={video.snippet.thumbnails.high.url}
                source='youtube'
            />
            <Segment attached>
            <p>{video.snippet.description}</p>
            </Segment>
        </div>
    )
}

export default VideoDetail;