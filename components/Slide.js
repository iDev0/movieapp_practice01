import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { apiImage } from '../Api'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Poster from './Poster'
import Vote from '../components/Vote'

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
    justify-content : space-around;
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


const VoteContainer = styled.View`
    margin-bottom : 7px;
`;

const OverView = styled.Text`
    color : rgb(220, 220, 220);
    margin-bottom : 7px;
    font-size : 15px;
`;

const Button = styled.View`
    margin-top : 10px;
    background-color : #e74c3c;
    padding : 10px;
    border-radius : 3px;
`;

const ButtonText = styled.Text`
    color : white;
`;

const Slide = ({id, backgroudImage, title, votes, overview, poster}) => (
    <Container>
        <BackGround source={{url : apiImage(backgroudImage)}}/>
        <Content>
            <Poster url={backgroudImage} />
            <DataView>
                <Title>{title.slice(0, 30)}</Title>
                <VoteContainer>
                    <Vote votes={votes}/>
                </VoteContainer>
                <OverView>{overview.slice(0, 30)}</OverView>
                <TouchableOpacity>
                    <Button>
                        <ButtonText>Detail</ButtonText>
                    </Button>
                </TouchableOpacity>
            </DataView>
        </Content>
    </Container>
)

Slide.propTypes = {
    backgroudImage : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired,
    overview : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}


export default Slide
