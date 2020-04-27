import React from 'react'
import {Dimensions, ActivityIndicator, ScrollView} from 'react-native'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import Slide from '../components/Slide'
import {apiImage} from '../Api'
import Title from '../components/Title'
import Vertical from '../components/Vertical'
import ScrollContainer from '../components/ScrollContainer'
import Horizontal from '../components/Horizontal'
import List from '../components/List'
import HorizontalSlider from '../components/HorizontalSlider'

const {width, height} = Dimensions.get('screen')

const Container = styled.View``;


const SlideContainer = styled.View`
    width : ${width}px;
    height : ${height/4}px;
    margin-bottom : 50px;
`;

const MoviesPresenter = ({loading, nowPlaying, popular, upcoming}) => {
    return (
        <ScrollContainer loading={loading}>
            <>
                <SlideContainer>
                    <Swiper controlsEnabled={false} loop timeout={3}>    
                        {nowPlaying.map(movie => (
                            <Slide
                                key={movie.id} 
                                backgroudImage={movie.backdrop_path} 
                                votes={movie.vote_average}
                                title={movie.original_title}
                                overview={movie.overview}       
                                poster={movie.poster_path}         
                            />                        
                        ))}                             
                    </Swiper>
                </SlideContainer>
                <Container>
                    <HorizontalSlider title='인기상영작'>
                        {popular.map(movie => (
                            <Vertical
                                key={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                                vote={movie.vote_average}
                            />
                        ))}
                    </HorizontalSlider>
                    <List title='Comming Soon'>
                        {upcoming.map(movie => (
                            <Horizontal
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                                overview={movie.overview}
                                releaseDate={movie.release_date}
                            />
                        ))}
                    </List>                      
                </Container>                
            </>
        </ScrollContainer>
    )
}

export default MoviesPresenter
