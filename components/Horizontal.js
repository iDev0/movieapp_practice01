import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Poster from './Poster'
import {trimText} from '../utils'



const Container = styled.View`

`;

const Data = styled.View``;

const Title = styled.Text`
    color : white;
`;
const ReleaseDate = styled.Text`
    color : white;
`;
const OverView = styled.Text`
    color : white;
`;


const Horizontal = ({id, poster, title, overview, releaseDate}) => (
    <TouchableOpacity>
        <Container>
            <Poster url={poster}/>
            <Data>
                <Title>{trimText(title, 20)}</Title>
                <ReleaseDate>{releaseDate}</ReleaseDate>
                <OverView>{trimText(overview,80)}</OverView>
            </Data>
        </Container>
    </TouchableOpacity>
)
export default Horizontal
