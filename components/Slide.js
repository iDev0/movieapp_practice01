import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { apiImage } from '../Api'

const {width, height} = Dimensions.get('screen')
const Container = styled.View`
    width : 100%;
    height : 100%;
`;

const BackGround = styled.Image`
    position : absolute;
    width : 100%;
    height : 100%;
    opacity : 0.4;
`;

const Content = styled.View`
    height : 100%;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;

const DataView = styled.View`
    width : 50%;
    align-items : flex-start;
`;

const Title = styled.Text`
    color : white;
    font-size : 18px;
    margin-bottom : 10px;
`;

const Votes = styled.Text`
    color : rgb(220, 220, 220);
    margin-bottom : 7px;
    font-size : 12px;
`;

const Slide = ({backgroudImage, title, votes}) => (
    <Container>
        <BackGround source={{url : apiImage(backgroudImage)}}/>
        <Content>
            <DataView>
                <Title>{title.slice(0, 30)}</Title>
                <Votes>{votes}</Votes>
            </DataView>
        </Content>
    </Container>
)

Slide.propTypes = {
    backgroudImage : PropTypes.string.isRequired
}


export default Slide
