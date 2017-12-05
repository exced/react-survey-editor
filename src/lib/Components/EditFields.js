import React from 'react'
import PropTypes from 'prop-types'
import {
  Input,
} from 'antd'
import styled from 'styled-components'

const StyledInput = styled(Input) `
color: ${props => props.color ? props.color : '#181919'};
font-size: 1.25em;
padding: 0.25em 1em;
border-width: 1px;
border-color: ${props => props.focused ? '#181919' : 'transparent'};
background-color: transparent;
width: auto;
height: auto;
text-align: center;
`

export const EditText = ({ onChange, value, size, placeholder }) => (
  <StyledInput
    onFocus={e => e.target.select()}
    onBlur={e => e.target.blur()}
    onPressEnter={e => e.target.blur()}
    size={size}
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
  />
)

EditText.propTypes = {
  onChange: PropTypes.func.isRequired,
}