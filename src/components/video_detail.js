import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Fetching Video...</div>
    }

    const videoId = video.id.videoId;
    const vidURL = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-details col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="youtube-vid" className="embed-responsive-item" src={vidURL}></iframe>
            </div>
            <div className="details">
                <h5>{video.snippet.title}</h5>
            </div>
        </div>
    );
};

export default VideoDetail;