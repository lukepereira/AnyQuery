import React, { Component } from 'react'
import './App.css'
import SearchSuggestions from './components/SearchSuggestions'
import SearchQuery from './components/SearchQuery'
import { SITE_NAMES } from './constants'

class App extends Component {
    state = {
        selectedSite: {
            label: '',
            domain: '',
            url: '',
        },
        focusedInput: '',
    }

    handleSiteSelection = selectedSite => {
        this.setState({ selectedSite, focusedInput: SITE_NAMES.QUERY })
    }

    handleSearch = query => {
        const siteData = this.state.selectedSite
        const URL = siteData.url.replace(`\{searchTerms\}`, query)
        window.open(URL, '_blank')
    }

    getFocusedState = (inputName, inputRef) => {
        if (inputRef && this.state.focusedInput === inputName) {
            setTimeout(() => inputRef.focus(), 100)
        }
    }

    render() {
        return (
            <div className="container">
                <div className="title-container">
                    <div className="title">AnyQuery</div>
                </div>
                <div className="search-container">
                    <div className="search-suggestions">
                        <SearchSuggestions
                            handleFocus={ref =>
                                this.getFocusedState(
                                    SITE_NAMES.SUGGESTIONS,
                                    ref,
                                )
                            }
                            handleSiteSelection={this.handleSiteSelection}
                        />
                    </div>
                    <div className="search-query">
                        <SearchQuery
                            selectedSite={this.state.selectedSite}
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
