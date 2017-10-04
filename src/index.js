import _ from 'lodash';
import React, { Component } from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('tahiti big wave surfing');
    }

    videoSearch(term) {
        const env = runtimeEnv();
        YTSearch({ key: env.REACT_APP_API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-light lily-nav">
                        <span className="h1 navbar-brand mb-0 lily-brand">React Tube</span>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <SearchBar onSearchTermChange={videoSearch} />
                        <VideoDetail video={this.state.selectedVideo} />
                        <VideoList
                            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                            videos={this.state.videos} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();