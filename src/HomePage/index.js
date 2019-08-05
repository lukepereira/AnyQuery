import React, { Component } from 'react'
import './App.css'
import SearchQuery from './components/SearchQuery'
import MultiSearch from './components/SearchSuggestions/multiSearch'
import { SITE_NAMES } from './constants'

class App extends Component {
    state = {
        selectedSites: [],
        focusedInput: '',
    }

    handleSiteSelection = selectedSites => {
        this.setState({ selectedSites, focusedInput: SITE_NAMES.QUERY })
    }

    handleSearch = query => {
        this.state.selectedSites.forEach(siteData => {
            const URL = siteData.url.replace(`\{searchTerms\}`, query)
            window.open(URL, '_blank')
        })
    }

    getFocusedState = (inputName, inputRef) => {
        if (inputRef && this.state.focusedInput === inputName) {
            setTimeout(() => inputRef.focus(), 100)
        }
    }

    render() {
        console.log('^^^^^', this.state)
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
                            handleFocus={ref =>
                                this.getFocusedState(SITE_NAMES.QUERY, ref)
                            }
                            handleSearch={this.handleSearch}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
