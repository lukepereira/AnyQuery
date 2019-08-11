import React from 'react'
import PropTypes from 'prop-types'
import find from 'lodash/find'
import orderBy from 'lodash/orderBy'
import clsx from 'clsx'
import Select from 'react-select'
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import CancelIcon from '@material-ui/icons/Cancel'
import { SEARCH_ENGINES, GROUP_TYPES } from './searchEngines'

function getSuggestions() {
    const emptySuggestions = Object.values(GROUP_TYPES).map(group => ({
        label: group,
        options: [],
    }))

    const suggestions = SEARCH_ENGINES.reduce(
        (groupsAccumulator, searchEngine) => {
            if (!searchEngine.groups) {
                const otherGroup = find(groupsAccumulator, {
                    label: GROUP_TYPES.OTHER,
                })
                otherGroup.options.push({
                    value: searchEngine.label,
                    label: searchEngine.label,
                })
            } else {
                searchEngine.groups.forEach(group => {
                    const foundGroup = find(groupsAccumulator, {
                        label: group,
                    })
                    foundGroup.options.push({
                        value: searchEngine.label,
                        label: searchEngine.label,
                    })
                })
            }
            return groupsAccumulator
        },
        emptySuggestions,
    )

    return suggestions.map(suggestion => {
        suggestion.options = orderBy(suggestion.options, ['value'], ['asc'])
        return suggestion
    })
}

const suggestions = getSuggestions()

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    input: {
        display: 'flex',
        padding: 0,
        height: 'auto',
        minHeight: '45px',
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: theme.spacing(0.5, 0.25),
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light'
                ? theme.palette.grey[300]
                : theme.palette.grey[700],
            0.08,
        ),
    },
    noOptionsMessage: {
        padding: theme.spacing(1, 2),
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        bottom: 6,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing(2),
    },
}))

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    )
}

NoOptionsMessage.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired,
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />
}

inputComponent.propTypes = {
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired,
        }),
    ]),
}

function Control(props) {
    const {
        children,
        innerProps,
        innerRef,
        selectProps: { classes, TextFieldProps },
    } = props

    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: classes.input,
                    ref: innerRef,
                    children,
                    ...innerProps,
                },
            }}
            {...TextFieldProps}
        />
    )
}

Control.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.shape({
        onMouseDown: PropTypes.func.isRequired,
    }).isRequired,
    innerRef: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.func,
        PropTypes.shape({
            current: PropTypes.any.isRequired,
        }),
    ]).isRequired,
    selectProps: PropTypes.object.isRequired,
}

function MultiValue(props) {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={clsx(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={props.removeProps.onClick}
            deleteIcon={<CancelIcon {...props.removeProps} />}
        />
    )
}

const components = {
    Control,
    MultiValue,
    NoOptionsMessage,
}

export default function IntegrationReactSelect(props) {
    const classes = useStyles()
    const theme = useTheme()
    const [multi, setMulti] = React.useState(null)

    function handleChangeMulti(selectedSites) {
        setMulti(selectedSites)

        props.handleSiteSelection(
            selectedSites.map(siteData =>
                find(SEARCH_ENGINES, { label: siteData.label }),
            ),
        )
    }

    const selectStyles = {
        input: base => ({
            ...base,
            color: theme.palette.text.primary,
            '& input': {
                font: 'inherit',
            },
        }),
    }

    return (
        <div className={classes.root}>
            <NoSsr>
                <Select
                    classes={classes}
                    styles={selectStyles}
                    inputId="react-select-multiple"
                    TextFieldProps={{
                        label: 'Select search engines',
                        InputLabelProps: {
                            htmlFor: 'react-select-multiple',
                            shrink: true,
                        },
                    }}
                    placeholder=""
                    options={suggestions}
                    components={components}
                    value={multi}
                    onChange={handleChangeMulti}
                    isMulti
                />
            </NoSsr>
        </div>
    )
}
