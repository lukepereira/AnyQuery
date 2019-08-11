export const GROUP_TYPES = {
    SEARCH: 'Web Search',
    NEWS: 'News',
    RESEARCH: 'Research',
    MEDIA: 'Media',
    SOCIAL: 'Social',
    ECOMMERCE: 'Ecommerce',
    OTHER: 'Other',
}

export const SEARCH_ENGINES = [
    {
        label: 'Google',
        domain: 'google.com',
        groups: [GROUP_TYPES.SEARCH],
        url: 'https://google.com/search?q={searchTerms}',
    },
    {
        label: 'Google News',
        domain: 'google.com',
        groups: [GROUP_TYPES.NEWS],
        url: 'https://www.google.com/search?tbm=nws&q={searchTerms}',
    },
    {
        label: 'Google Videos',
        domain: 'google.com',
        groups: [GROUP_TYPES.MEDIA],
        url: 'https://www.google.com/search?tbm=vid&q={searchTerms}',
    },
    {
        label: 'Google Images',
        domain: 'google.com',
        groups: [GROUP_TYPES.MEDIA],
        url: 'https://www.google.com/search?tbm=isch&q={searchTerms}',
    },
    {
        label: 'Google Shopping',
        domain: 'google.com',
        groups: [GROUP_TYPES.ECOMMERCE],
        url: 'https://www.google.com/search?tbm=shop&q={searchTerms}',
    },
    {
        label: 'Metacritic',
        domain: 'metacritic.com',
        groups: [GROUP_TYPES.RESEARCH],
        url: 'https://www.metacritic.com/search/all/{searchTerms}/results',
    },
    {
        label: 'Wikipedia',
        domain: 'en.wikipedia.org',
        groups: [GROUP_TYPES.RESEARCH],
        url:
            'https://en.wikipedia.org/w/index.php?title=Special:Search&search={searchTerms}',
    },
    {
        label: 'Twitter',
        domain: 'twitter.com',
        groups: [GROUP_TYPES.SOCIAL, GROUP_TYPES.NEWS],
        url: 'https://twitter.com/search?q={searchTerms}',
    },
    {
        label: 'YouTube',
        domain: 'youtube.com',
        groups: [GROUP_TYPES.MEDIA],
        url:
            'https://www.youtube.com/results?search_query={searchTerms}&utm_source=opensearch',
    },
    {
        label: 'Facebook',
        domain: 'facebook.com',
        groups: [GROUP_TYPES.SOCIAL],
        url:
            'https://www.facebook.com/search/top/?q={searchTerms}&opensearch=1',
    },
    {
        label: 'Reddit',
        domain: 'reddit.com',
        groups: [GROUP_TYPES.SOCIAL],
        url:
            'https://www.reddit.com/search?q={searchTerms}&utm_source=opensearch',
    },
    {
        label: 'Yahoo',
        domain: 'yahoo.com',
        groups: [GROUP_TYPES.SEARCH],
        url: 'https://ca.search.yahoo.com/search?p={searchTerms}&fr=opensearch',
    },
    {
        label: 'Bing',
        domain: 'bing.com',
        groups: [GROUP_TYPES.SEARCH],
        url: 'https://www.bing.com/search?q={searchTerms}&PC=U316&FORM=CHROMN',
    },
    {
        label: 'SoundCloud',
        domain: 'soundcloud.com',
        groups: [GROUP_TYPES.MEDIA],
        url: 'https://soundcloud.com/search?q={searchTerms}',
    },
    {
        label: 'Wikimedia Commons',
        domain: 'upload.wikimedia.org',
        groups: [GROUP_TYPES.MEDIA],
        url:
            'https://commons.wikimedia.org/w/index.php?title=Special:Search&search={searchTerms}',
    },
    {
        label: 'The Pirate Bay',
        domain: 'thepiratebay.org',
        groups: [GROUP_TYPES.MEDIA],
        url: 'http://thepiratebay.org/search/{searchTerms}',
    },
    {
        label: 'Medium',
        domain: 'medium.com',
        groups: [GROUP_TYPES.RESEARCH],
        url: 'https://medium.com/search?q={searchTerms}&ref=opensearch',
    },
    {
        label: 'Vimeo',
        domain: 'vimeo.com',
        groups: [GROUP_TYPES.MEDIA],
        url: 'https://vimeo.com/search?q={searchTerms}',
    },
    {
        label: 'Hacker News',
        domain: 'news.ycombinator.com',
        groups: [GROUP_TYPES.NEWS],
        url:
            'https://hn.algolia.com?q={searchTerms}&utm_source=opensearch&utm_medium=search&utm_campaign=opensearch',
    },
    {
        label: 'eBay',
        domain: 'ebay.com',
        groups: [GROUP_TYPES.ECOMMERCE],
        url:
            'https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw={searchTerms}&_sacat=0',
    },
    {
        label: 'Amazon',
        domain: 'amazon.com',
        groups: [GROUP_TYPES.ECOMMERCE],
        url:
            'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords={searchTerms}',
    },
    {
        label: 'DuckDuckGo',
        domain: 'duckduckgo.com',
        groups: [GROUP_TYPES.SEARCH],
        url: 'https://duckduckgo.com/?q={searchTerms}&atb=v146-4__',
    },
    {
        label: 'Stack Exchange',
        domain: 'stackexchange.com',
        groups: [GROUP_TYPES.RESEARCH],
        url: 'https://stackexchange.com/search?q={searchTerms}',
    },
    {
        label: 'Archive',
        domain: 'archive.org',
        groups: [GROUP_TYPES.RESEARCH],
        url:
            'https://archive.org/searchresults.php?search={searchTerms}&sin=&limit=100&start=0&searchAll=yes&submit=this+was+submitted',
    },
    {
        label: 'Spotify',
        domain: 'spotify.com',
        groups: [GROUP_TYPES.MEDIA],
        url: 'https://open.spotify.com/search/results/{searchTerms}',
    },
    {
        label: 'Wall Street Journal',
        domain: 'wsj.com',
        groups: [GROUP_TYPES.NEWS],
        url:
            'https://www.wsj.com/search/term.html?KEYWORDS={searchTerms}&mod=searchresults_viewallresults',
    },
    {
        label: 'Reuters',
        domain: 'reuters.com',
        groups: [GROUP_TYPES.NEWS],
        url: 'https://www.reuters.com/search/news?blob={searchTerms}',
    },
    {
        label: 'BBC',
        domain: 'bbc.com',
        groups: [GROUP_TYPES.NEWS],
        url: 'https://www.bbc.co.uk/search?q={searchTerms}',
    },
    {
        label: 'arXiv',
        domain: 'arxiv.com',
        groups: [GROUP_TYPES.RESEARCH],
        url:
            'https://arxiv.org/search/?query={searchTerms}&searchtype=all&source=header',
    },
    {
        label: 'MIT OpenCourseWare',
        domain: 'mit.edu',
        groups: [GROUP_TYPES.RESEARCH],
        url:
            'https://ocw-origin.odl.mit.edu/search/ocwsearch.htm?q={searchTerms}',
    },
]
