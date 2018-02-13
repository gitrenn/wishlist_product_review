import React from 'react';
import VideoListItem from './video_list_item';
import { List } from 'semantic-ui-react';


const VideoList = (props) => {
    // console.log(props.videos);
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });
    console.log(videoItems);
    return(
        <div>
            <List selection verticalAlign='middle'>
                
                    {videoItems}
               
        </List>
        </div>
    )
}

export default VideoList;