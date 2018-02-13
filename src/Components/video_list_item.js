import React from 'react';
import { List } from 'semantic-ui-react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';


const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <List.Item>
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