import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="col-md-12">
                <form>
                    <div className="form-group">
                        <input
                        value={this.state.term}
                        className="form-control" placeholder="Search for YouTube Videos"
                        onChange={event => this.onInputChange(event.target.value)} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;