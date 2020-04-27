import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Poster from './Poster'
import {trimText} from '../utils'



const Container = styled.View`
    padding : 0px 30px;
    flex-direction : row;
    margin-bottom : 30px;
    align-items : flex-start;
`;

const Data = styled.View`
    align-items : flex-start;
    width : 65%;
    margin-left : 25px;
`;

const Title = styled.Text`
    color : white;
    font-weight : 500;
`;
const ReleaseDate = styled.Text`
    color : white;
    opacity : 0.8;
    font-size : 12px;
`;
const OverView = styled.Text`
    margin-top : 10px;
    color : white;
    opacity : 0.8;
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
