import React from 'react';
import { List } from 'semantic-ui-react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';


const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <List.Item onClick={() => onVideoSelect(video)}>
            <Image src={imageUrl} />
            <List.Content>
                <List.Header>
                    {video.snippet.title}
                </List.Header>
            </List.Content>
        </List.Item>
    )
}

export default VideoListItem; 