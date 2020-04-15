import React from 'react'
import {Dimensions, ActivityIndicator} from 'react-native'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import Slide from '../components/Slide'
import {apiImage} from '../Api'


const {width, height} = Dimensions.get('screen')

const Container = styled.View`
    flex : 1;
    background-color : black;
    justify-content : flex-start;
`;


const SlideContainer = styled.View`
    width : ${width}px;
    height : ${height/4}px;
`;


const MoviesPresenter = ({loading, nowPlaying}) => {
    
    return (
        <Container>
            {loading ? (
                <ActivityIndicator color='white' size='small' />
            ) : (
            <>
                <SlideContainer>
                    <Swiper controlsEnabled={false} loop timeout={3}>    
                        {nowPlaying.map(movie => (
                            <Slide
                                key={movie.id} 
                                backgroudImage={movie.backdrop_path} 
                                votes={movie.vote_average}
                                title={movie.original_title}                
                            />                        
                        ))}                             
                    </Swiper>
                </SlideContainer>
            </>                
            )}
        </Container>
    )
}

export default MoviesPresenter
