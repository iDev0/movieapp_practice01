import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {apiImage} from '../Api'

const Image = styled.Image`
    width : 100px;
    height : 100px;
    border-radius : 4px;
`;

const Poster = ({url}) => (
    <Image source={{url : apiImage(url)}} />
)

Poster.propTypes = {
    url : PropTypes.string.isRequired
}

export default Poster
