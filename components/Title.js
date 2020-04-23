import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.Text`
    font-size : 15px;
    font-weight : bold;
    color : white;
    margin-left : 30px;
`;

const Title = ({title}) => <Text>{title}</Text>

Title.propTypes = {
    title : PropTypes.string.isRequired
}


export default Title
