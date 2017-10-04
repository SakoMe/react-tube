import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imgURL = video.snippet.thumbnails.default.url;

    return (
        <div>
            <li onClick={() => onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" alt="youtube thumbnail" src={imgURL} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default VideoListItem;