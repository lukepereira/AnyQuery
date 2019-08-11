import React, { Component } from 'react'
import './App.css'
import SearchQuery from './components/SearchQuery'
import MultiSearch from './components/SearchSuggestions/multiSearch'

class App extends Component {
    state = {
        selectedSites: [
            {
                url: 'https://google.com/search?q={searchTerms}',
            },
        ],
    }

    handleSiteSelection = selectedSites => {
        this.setState({ selectedSites })
    }

    handleSearch = query => {
        this.state.selectedSites.forEach(siteData => {
            const URL = siteData.url.replace(`\{searchTerms\}`, query)
            const result = window.open(URL, '_blank')
            if (!result) {
                alert('To open multiple tabs, please disable pop-up blocking')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="title-container">
                    <div className="title">AnyQuery</div>
                </div>
                <div className="search-container">
                    <div className="search-suggestions">
                        <MultiSearch
                            handleSiteSelection={this.handleSiteSelection}
                        />
                    </div>
                    <div className="search-query">
                        <SearchQuery
                            selectedSites={this.state.selectedSites}
                            handleSearch={this.handleSearch}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
