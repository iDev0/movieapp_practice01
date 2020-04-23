import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Poster from '../components/Poster'
import Vote from '../components/Vote'
import {trimText} from '../utils'

const Container = styled.View`
    align-items : center;
    margin-left : 20px;
`;

const Title = styled.Text`
    color : white;
    font-weight : 500;
    margin : 10px 0px 5px 0px;
`;

const Vertical = ({poster, vote, title}) => (
    <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 20)}</Title>
        <Vote votes={vote} />
    </Container>
)

    
export default Vertical
