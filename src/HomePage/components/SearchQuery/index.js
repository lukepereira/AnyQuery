import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: 8,
        flex: 1,
        '&::placeholder': {
            paddingLeft: 10,
        },
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
})

export default function CustomizedInputBase(props) {
    const classes = useStyles()
    const [state, setState] = React.useState({
        query: '',
    })

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            props.handleSearch(e.target.value)
        }
    }

    const handleOnChange = e => {
        setState({ query: e.target.value })
    }

    const handleIconClick = () => {
        props.handleSearch(state.query)
    }

    const getPlaceholderText = () => {
        return `Search`
    }

    return (
        <Paper className={classes.root}>
            <InputBase
                inputRef={props.handleFocus}
                className={classes.input}
                placeholder={getPlaceholderText()}
                onKeyDown={handleKeyDown}
                onChange={handleOnChange}
            />
            <IconButton
                className={classes.iconButton}
                aria-label="search"
                onClick={handleIconClick}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
