import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (event) => {

    };

    render() {
        return (
            <div className="search-bar ui segment">
                <from className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            placeholder="Input the video"
                            onChange={this.onInputChange}
                        />
                    </div>
                </from>
            </div>
        );
    }
}

export default SearchBar;